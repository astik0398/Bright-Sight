import { Heading, Img, Text,
  Button,
  Box,
  HStack,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  Input,
  FormLabel, } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Singleuserpage = () => {

    const {id} = useParams()

    const [singleData, setsingleData] = useState([])

    function SingleUserData(){
  
      let API = `https://bright-sight.onrender.com/cpproblems/${id}`
      let resposne = fetch(API)
      resposne.then(function(res){
        return res.json()
  
      })
      .then(function(data){
        setsingleData(data)
      })
  
    }

    useEffect(()=>{
      SingleUserData()
    }, [])

    console.log(singleData)
 
  return (
    <div style={{ marginTop:'1.5px'}}>

      <div style={{display:'flex', backgroundColor:'#E2F0F9', alignItems:'center'}}>
        <div>
          <Img width="400px" src={singleData.image}/>
        </div>

        <div style={{marginLeft:'100px', fontSize:'30px'}}>
          <Heading color="#DF4C73" size="xl">{singleData.name}</Heading>
          <Text> <b>Starts @ ₹{singleData.price} for 30 mins</b></Text>
          <Text><b>Session Mode: <span style={{color:'#DF4C73'}}>{singleData.session_mode} </span></b></Text>
          <Text> <b>City: <span style={{color:'#DF4C73'}}> {singleData.city} </span></b></Text>
          <Text> <b>Speaks: <span style={{color:'#DF4C73'}}>{singleData.speaks} </span></b> </Text>
        </div>

        <div style={{display:'flex', flexDirection:'column', marginLeft:'250px', gap:'30px'}}>
          <Button style={{backgroundColor:'white', borderRadius: '15px', boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', color:'#DF4C73'}}>BOOK NOW</Button>
          <Button style={{backgroundColor:'white',  borderRadius: '15px', boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', color:'#DF4C73'}}>BOOKMARK NOW</Button>
        </div>
      </div>

      <div style={{backgroundColor:'#FFEEE4'}}>

      <div style={{marginLeft:'-1200px', paddingTop:'50px'}}>
        <Heading size="xl">About <span style={{color:'#DF4C73'}}>{singleData.name}</span>:</Heading>
      </div>

      <div style={{textAlign:'justify'}}>
      <Text fontSize="20px" marginLeft="10px" marginTop="15px" width="95%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eius, debitis repellendus praesentium obcaecati mollitia expedita nobis cupiditate illo consectetur voluptate quae error veritatis, possimus nihil asperiores provident ea deleniti.
      Aspernatur nemo accusamus ullam odio, nesciunt sint provident aperiam, blanditiis, similique voluptates praesentium molestias? Nulla dolores sunt dolorum eum placeat, ducimus modi! Eos natus unde cupiditate id architecto adipisci molestias?
      Iste nobis est illum inventore assumenda molestiae aliquid adipisci ullam suscipit quas possimus repellat nemo nisi, perspiciatis cupiditate quis! Temporibus magni voluptatibus voluptatum aperiam, iste quasi. Provident sunt accusamus modi.
      Ea blanditiis sapiente facilis sunt quod vel, quis mollitia provident consequuntur voluptatibus, quas quaerat rem facere cupiditate nobis saepe molestias ipsam? Animi quibusdam officia rerum incidunt dolorum cum velit odio.
      Perspiciatis facilis nesciunt officia soluta veniam, culpa minima earum. At quis, dicta nisi debitis explicabo corporis ad, harum quos eligendi quam soluta nobis esse. Perferendis ullam cupiditate mollitia ad totam?
      Suscipit, accusamus facilis. Vero omnis inventore in, magni minima fugiat autem! Eum ab quasi tempora, eveniet voluptates provident nisi commodi id consequuntur quos rerum incidunt iusto ullam libero molestiae cum.
      Expedita consequatur corrupti tenetur eos minima earum nesciunt praesentium. Qui unde perferendis sunt, iusto ipsa itaque libero inventore maiores temporibus, error id eum excepturi dolorem nulla ad voluptate omnis recusandae.
      Ipsa necessitatibus iusto aut accusamus rerum nihil qui consectetur minima mollitia repellendus minus fugit facilis dicta, placeat cumque aliquid officia omnis hic tempore dolores! Repudiandae quae voluptas sed nobis consequuntur!
      </Text>
      </div>

      </div>

      <div>
      <div
        style={{
          backgroundColor: "#FFEEE4",
          //   marginTop: "285px", Our platform is built by psychiatrists, therapists and mental health experts with immense global experience.
          padding: "15px",
        }}
      >
        <Heading size="xl" style={{marginLeft:'-1000px', marginBottom: "25px", marginTop: "25px" }}>
         <span style={{color:'#DF4C73'}}>{singleData.name}</span> offers therapy in :
        </Heading>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            // paddingLeft: "17px",
            justifyContent: "space-around",
            gap: "10px",
            width: "90%",
            margin: "auto",
            paddingBottom: "40px",
            marginLeft:'5px'
          }}
        >
          <Box
            style={{
              //   width: "400px",
              //   height: "450px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              borderRadius: "15px",
              backgroundColor: "white",
              display: "flex",
              padding: "15px",
              flexDirection: "column",
              gap: "30px",
              justifyContent: "center",
              alignItems: "center",
              height:'300px',
              width: '220px'
            }}
          >
            <VStack style={{ color: "#DF4C73" }}>
              <Img src="https://cdn-icons-png.flaticon.com/512/71/71834.png" />
              <Heading as="h3">Anger</Heading>
            </VStack>

          </Box>

          <Box
            style={{
              //   width: "400px",
              //   height: "450px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              borderRadius: "15px",
              backgroundColor: "white",
              display: "flex",
              padding: "15px",
              flexDirection: "column",
              gap: "30px",
              justifyContent: "center",
              alignItems: "center",
              height:'300px',
              width: '220px'
            }}
          >
            <VStack style={{ color: "#DF4C73" }}>
              <Img src="https://img.icons8.com/ios7/12x/grief.png" />
              <Heading as="h3">Grief</Heading>
            </VStack>

          </Box>

          <Box
            style={{
              //   width: "400px",
              //   height: "450px",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              borderRadius: "15px",
              backgroundColor: "white",
              display: "flex",
              padding: "15px",
              flexDirection: "column",
              gap: "30px",
              justifyContent: "center",
              alignItems: "center",
              height:'300px',
              width: '220px'
            }}
          >
            <VStack style={{ color: "#DF4C73"}}>
              <Img src="https://static.thenounproject.com/png/3396226-200.png" />
              <Heading as="h3">Anxiety</Heading>
            </VStack>

          </Box>
        </div>
      </div>

      </div>
       
    </div>
  )
}

export default Singleuserpage