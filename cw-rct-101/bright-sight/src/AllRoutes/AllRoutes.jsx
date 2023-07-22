import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../AllPages/Home";
import Login from "../AllPages/Login";
import Services from "../AllPages/Services";
import Counselors from "../AllPages/Counselors";
import AboutUs from "../AllPages/AboutUs";
import Signup from "../AllPages/Signup";
import Singleuserpage from "../AllPages/Singleuserpage";
import Contact from "../AllPages/Contact";
import PrivateRoute from "../AuthContext/PrivateRoute";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={
        <PrivateRoute>
          <Services />
        </PrivateRoute>
        } />
        <Route path="/counselors" element={<Counselors />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/counselors/:id" element={<Singleuserpage/>}/>
        <Route path="/contactus" element={<Contact/>}/>
      </Routes>
    </div>
  );
};

export default AllRoutes;
