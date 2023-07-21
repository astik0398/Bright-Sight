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

const Services = ({city, Type}) => {

  console.log(city, Type)

  return <div>
         
  <Heading marginTop={5} as='h1' size='3xl'>Your Bookings</Heading>
  <Heading as='h1' size='3xl'>hbnkjn: {city}</Heading>
  <p>language: {Type}</p>

</div>
}

export default Services