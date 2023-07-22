import React, { useEffect, useState } from 'react'
import { Button, Heading, Img, Text } from '@chakra-ui/react'
import Skeletonpage from '../Extras/Skeletonpage'
import Singleuserpage from './Singleuserpage'
import { Navigate, useNavigate } from 'react-router-dom'
import Pagination from '../Extras/Pagination'
import Services from './Services'
// import SkeletonPage from '../Extras/SkeletonPage'
const Counselors = () => {

  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  // const [bookings, setBookings] = useState([])

  const bookings = JSON.parse(localStorage.getItem("booking")) || []

  // const bookings = []

  const navigate = useNavigate()

  let totalData = 16
  let totalBtnReq = Math.ceil(totalData/7)

  function fetchedData(page){

    setLoading(true)

    let API = `https://bright-sight.onrender.com/cpproblems?_page=${page}&_limit=7`
    let resposne = fetch(API)
    resposne.then(function(res){
      return res.json()
    })
    .then(function(data){
      console.log(data)
      setCards(data)
      setLoading(false)
    })

  }

  useEffect(()=>{
    fetchedData(page)
  }, [page])

  if(loading){
    return <Skeletonpage/>

  }

  function handlePage(page) {
    setPage(page)

  }

  function handleBOOK(item, name){

    // setBookings([...bookings, item])

    bookings.push(item)

    localStorage.setItem("booking", JSON.stringify(bookings))

    // console.log(item);

    alert(`Your appointment is booked with ${name}`)
    
  }

  return (
    <div>
      <Heading style={{marginTop: '30px'}} as='h1' size='xl'>Who Do You Want To <span style={{color:'#DF4C73'}}>Consult</span> ?</Heading>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', paddingLeft:'60px', marginTop: '20px', marginBottom:'40px'}}>
      {cards.map((item)=>{
        return <div style={{backgroundColor:'#F8E8EE', width: '1400px', marginTop:'30px', padding: '25px', borderRadius: '50px', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}}> 

       <Heading style={{textAlign:'center'}} as='h3' size='xl'>{item.name}</Heading>

        <div style={{display: 'flex', justifyContent:'space-between', alignItems:'center'}}>

          <div >
          <Img height='280px' width='420px' src={item.image} borderRadius='50px'/>
          </div>

          <div style={{marginLeft:'-70px',  paddingTop: '35px'}}>
   
          <Heading as='h4' size='md'>About</Heading>
          
          <Text style={{marginTop: '5px'}}>Years of experience:  <b>{item.experience}+years</b> </Text>
          <Text>City: {item.city}</Text>
          <Text style={{marginTop: '5px'}}>  <b> Speaks:  </b>{item.speaks}</Text>

          <Text style={{marginTop: '5px'}}>Starts @<b>₹{item.price} for 30 mins</b></Text>
          {/* <Text style={{marginTop: '5px'}}> <b> Expertise: </b>{item.expertise.join(", ")}</Text> */}
          
          {/* <Text style={{marginTop: '5px'}}>Session Mode: <b>{item.session_mode}</b></Text> */}
          </div>

          {/* <div style={{marginTop:"15px", border: '3px solid green', height: "250px"}}></div> */}

          <div style={{  width:'250px', paddingTop: '35px'}}>
            <Heading marginBottom="10px" as='h4' size='md'>Medical Qualification</Heading>
            {item.qualification.map((item)=>{
              return <ul>
                <li>{item}</li>
              </ul>
            })}
          </div>

          <div style={{   paddingTop: '35px'}}>
            <Heading marginBottom="10px" as='h4' size='md'>
            Expertise
            </Heading>
            {item.expertise.map((item)=>{
              return <ul>
                <li>{item}</li>
              </ul>
            })}
          </div>
        
        </div>

       <div style={{ display: 'flex', justifyContent: 'space-around', alignItems:'center', marginTop: '35px'}}>
        <Button  onClick={()=> navigate(`/counselors/${item.id}`)} style={{marginLeft:'-200px', width:'120px',  backgroundColor:'white', borderRadius: '15px', boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', color:'#DF4C73'}}>View Profile</Button>
        <Button onClick={()=> handleBOOK(item, item.name)} style={{ marginLeft:'-480px', width:'120px' , backgroundColor:'white', borderRadius: '15px', boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', color:'#DF4C73'}}>Book Now</Button>
        <Text style={{fontSize:'25px'}}> <b> Slots Available: <span style={{color: item.slots <=5 ? 'red' : 'green'}}>{item.slots}</span></b></Text>
       </div>
          
           </div>
      })}
      </div>

      <Pagination currentpage={page} handlePage={handlePage} totalBtnReq={totalBtnReq}/>
      
    </div>
  )
}

export default Counselors