import React, { useContext } from "react";
import { Img, Button, Link, Heading } from "@chakra-ui/react";
import { NavLink as RouterLink, useNavigate } from "react-router-dom";
import source from "../Images/Bright_Sight-removebg-preview.png";
import { AuthContext } from "../AuthContext/AuthContextProvider";

const Navbar = () => {
  // box-shadow: ;

  const {isAuth, token, logout} = useContext(AuthContext)
  const navigate = useNavigate()

  function handlelogout(){

    logout()
    navigate('/login')
  }

  return (
    <div
      style={{
        background: "#FFFFFF",
        display: "flex",
        justifyContent: 'space-between',
        alignItems: "center",
        height: "60px",
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      }}
    >
      <Img src={source} alt="logo" boxSize="150px" />

      <Link
        as={RouterLink}
        _hover={{ textDecoration: "none", color: "#cd9845" }}
        to="/"
        _activeLink={{ color: "#cd9845", fontWeight: "bold" }}
      >
        Home
      </Link>

      <Link
        as={RouterLink}
        _hover={{ textDecoration: "none", color: "#cd9845" }}
        _activeLink={{ color: "#cd9845", fontWeight: "bold" }}
        to="/aboutus"
      >
        About_Us
      </Link>

      <Link
        as={RouterLink}
        _hover={{ textDecoration: "none", color: "#cd9845" }}
        _activeLink={{ color: "#cd9845", fontWeight: "bold" }}
        to="/services"
      >
        My_Booking
      </Link>

      <Link
        as={RouterLink}
        _hover={{ textDecoration: "none", color: "#cd9845" }}
        _activeLink={{ color: "#cd9845", fontWeight: "bold" }}
        to="/counselors"
      >
        Doctors
      </Link>

      <Link
        as={RouterLink}
        _hover={{ textDecoration: "none", color: "#cd9845" }}
        _activeLink={{ color: "#cd9845", fontWeight: "bold" }}
        to="/contactus"
      >
        Contact
      </Link>

      <div>

      {isAuth ? (<span style={{display:'flex', gap: '15px', marginRight:'20px'}}> <Heading marginTop="5px" size="sm"> {token} </Heading>  <Button onClick={handlelogout} colorScheme="green" size="sm" variant="outline" width="75px">
        <Link _hover={{ textDecoration: "none" }} as={RouterLink} to="/login">
          Log Out
        </Link>
      </Button> </span> ) : ( <span style={{display:'flex', gap: '15px', marginRight:'20px'}}> {token} <Button colorScheme="red" size="sm" variant="outline" width="75px">
        <Link _hover={{ textDecoration: "none" }} as={RouterLink} to="/login">
          Log In
        </Link>
      </Button> </span> )}

      </div>

    

      
    </div>
  );
};

export default Navbar;
