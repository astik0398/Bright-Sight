import React from 'react'
import { Heading,  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer, } from '@chakra-ui/react'

const Services = ({id, name}) => {

  let bookings = JSON.parse(localStorage.getItem("booking"))

  // console.log(bookings);

  const date = new Date()
  let day = date.getDate()
  let month = date.getMonth() + 1
let year = date.getFullYear()

  return  <div style={{marginTop:'30px'}}>
  <Heading marginLeft='10px' textAlign='start' as='h1' size='lg'>
    All Your Bookings:
  </Heading>

  <Table style={{marginTop:'25px'}} variant='striped' colorScheme='teal'>

  <Thead>
      <Tr>
        <Th>S.No</Th>
        <Th>Name</Th>
        <Th>Language</Th>
        <Th>Date</Th>
        <Th>Mode</Th>
        <Th>Status</Th>
        <Th>Cancel</Th>
      </Tr>
    </Thead>

        <Tbody>
          {bookings?.map((booking, index) => (
            <Tr key={index}>
              <Td> <b>{index+1}</b> </Td>
              <Td> <b>{booking.name}</b> </Td>
              <Td> <b>{booking.speaks}</b> </Td>
              <Td> <b>{`${day}-${month}-${year}`}</b> </Td>
              <Td> <b>{booking.session_mode}</b> </Td>
              <Td color='#228B22'> <button> <b>BOOKED</b> </button> </Td>
              <Td color='red'> <button> <b>CANCEL</b> </button> </Td>
              {/* Add more columns as needed for other booking details */}
            </Tr>
          ))}
        </Tbody>
      </Table>

</div>
}

export default Services