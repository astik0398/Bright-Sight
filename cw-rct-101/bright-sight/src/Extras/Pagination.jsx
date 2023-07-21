import { Button } from '@chakra-ui/react'

const Pagination = ({currentpage, handlePage, totalBtnReq}) => {

    // const [currentPage, setCurrentPage] = useState(1)

    function handlePrev() {
      handlePage(currentpage - 1);
    }
  
    function handleNext() {
      handlePage(currentpage + 1);
    }

  return (
    <div style={{marginBottom:'40px', marginTop:'40px'}}>
        <Button style={{boxShadow: '0 4px 15px 0 rgba(65, 132, 234, 0.75)', color:"white",  borderRadius:'40px' ,backgroundImage: 'linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed'}}  isDisabled={currentpage === 1} onClick={handlePrev}>PREV</Button>
        <Button style={{marginLeft:'10px', backgroundColor:'lightgrey', borderRadius:'40%' , color:'white'}} > <b>{currentpage}</b></Button>
        <Button style={{ boxShadow: '0 4px 15px 0 rgba(65, 132, 234, 0.75)', color:"white" ,borderRadius:'40px'  , marginLeft:'10px', backgroundImage: 'linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed'}} isDisabled={currentpage >= totalBtnReq} onClick={handleNext}>NEXT</Button>
    </div>
  )
}

export default Pagination