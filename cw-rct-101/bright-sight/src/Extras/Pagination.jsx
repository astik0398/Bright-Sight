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
        <Button style={{backgroundColor:'white', borderRadius: '15px', boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', color:'#DF4C73'}}  isDisabled={currentpage === 1} onClick={handlePrev}> <b>PREV</b> </Button>
        <Button style={{backgroundColor:'white', borderRadius: '15px', boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', color:'#DF4C73', marginLeft:'20px'}} > <b>{currentpage}</b></Button>
        <Button style={{backgroundColor:'white', borderRadius: '15px', boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', color:'#DF4C73', marginLeft:'20px'}} isDisabled={currentpage >= totalBtnReq} onClick={handleNext}> <b>NEXT</b> </Button>
    </div>
  )
}

export default Pagination