import React, { useState } from "react";
import source from "../Images/Bright_Sight-removebg-preview.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [credentials, setCredentials] = useState([])
  const toast = useToast()

  let navigate = useNavigate()

  function showToast(){

    toast({
      title: 'Sign Up Success',
      description: "Your account has been created",
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
  }

  function errorToast(){

    toast({
      title: 'Fill All The Details',
      description: "Above input cannot be empty",
      status: 'error',
      duration: 2000,
      isClosable: true,
    })
  }

  

  function handleClick(){

    if(email==="" || password==="" || username===""){
      errorToast()
    }
    else{
      const inputData = {
        username: username,
        password: password,
        email: email
      }
  
      
    let API = "https://bright-sight.onrender.com/users"
    let response = fetch(API, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({  ...inputData  })
      
    })
    response.then(function(res){
      return res.json()
    })
    .then(function(data){
     setCredentials(data.inputData)
    })
  
    // alert('signup success')
    showToast()
    navigate('/login')
    }

  }

  return (
    <div>
      <div
        style={{
          paddingTop: "20px",
          paddingBottom: "40px",
          width: "30%",
          textAlign: "center",
          borderRadius: "15px",
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
          backgroundColor: "white",
          margin: "auto",
          marginTop: "75px",
        }}
      >
        <h1 style={{ fontSize: "40px", color: "#dd0031" }}>Hey There!</h1>
        <a href="/">
          {" "}
          <img
            style={{ width: "150px", margin: "auto" }}
            src={source}
            alt=""
          />{" "}
        </a>
        <input
          style={{
            backgroundColor: "rgb(235, 231, 231)",
            width: "300px",
            height: "40px",
            margin: "auto",
            display: "block",
            marginTop: "5px",
            border: "none",
            borderRadius: "25px",
            textAlign: "center",
            marginBottom: "22px",
          }}
          placeholder="Enter Your Name"
          type="text"
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
        />
        <input
          style={{
            backgroundColor: "rgb(235, 231, 231)",
            width: "300px",
            height: "40px",
            margin: "auto",
            display: "block",
            marginTop: "5px",
            border: "none",
            borderRadius: "25px",
            textAlign: "center",
          }}
          placeholder="Enter Your Email"
          type="email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />
        <input
          style={{
            backgroundColor: "rgb(235, 231, 231)",
            width: "300px",
            height: "40px",
            margin: "auto",
            display: "block",
            marginTop: "20px",
            border: "none",
            borderRadius: "25px",
            textAlign: "center",
          }}
          placeholder="Enter Your Password"
          type="password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
        />
        <button
          style={{
            width: "178px",
            height: "48px",
            backgroundColor: "#dd0031",
            color: "white",
            borderRadius: "25px",
            border: "none",
            fontWeight: "700",
            marginTop: "30px",
          }}
          onClick={handleClick}
        >
          SIGNUP
        </button>
        <p style={{ paddingTop: "20px" }}>
          Already have an account?
          <Link style={{ color: "#3a5622", fontWeight: "700" }} to="/login">
            Sign In
          </Link>{" "}
        </p>
      </div>

      {/* <Login data= {credentials}/> */}
    </div>
  );
};

export default Signup;
