import React, { useContext, useState } from "react";
import source from "../Images/Bright_Sight-removebg-preview.png";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContextProvider";
import { useToast } from "@chakra-ui/react";

const Login = () => {
  {
    document.body.style.backgroundColor = "rgb(235, 231, 231)";
  }

  const [cred, setCred] = useState([])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const toast = useToast()

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
      title: 'Wrong Credentials',
      description: "Check your username & password",
      status: 'error',
      duration: 2000,
      isClosable: true,
    })
  }

  const navigate = useNavigate()

  const {isAuth, login} = useContext(AuthContext)

  let API = "https://bright-sight.onrender.com/users"
  let resposne = fetch(API)
  resposne.then(function(res){
    return res.json()
  })
  .then(function(data){
    setCred(data)
  })

  let flag = false

  function handleClick(){

    for(let i=0; i<cred.length; i++){
      if(cred[i].email == email && cred[i].password == password){
       flag = true
       login(cred[i].username)
      }
    }

    

    if(flag){

      showToast()
      navigate('/')

    }
    else{
      errorToast()
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
          marginTop: "100px",
        }}
      >
        <h1 style={{ fontSize: "40px", color: "#dd0031" }}>Welcome Back!</h1>
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
          }}
          id="name1"
          placeholder="Enter Your Email"
          type="text"
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
          id="pass1"
          placeholder="Enter Your Password"
          type="password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
        />
        <button className="btn"
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
          onClick={ handleClick}
        >
          LOGIN
        </button>
        <p style={{ paddingTop: "20px" }}>
          Don't have an account?{" "}
          <Link style={{ color: "#3a5622", fontWeight: "700" }} to="/signup">
            Sign Up
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
