import React from "react";
import logowhite from "../Assets/logo-white.png"
import NavBar from "./navbar";
import YourProfile from "./YourProfile";
import BusinessInfo from "./BusinessInfo";
import AdditionalUsers from "./AdditionalUsers";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function Background(){
    return(
       <section className="BackgroundImage ">
        <div className="d-flex d-flex justify-content-between d-flex align-items-center m-5  ">
        <img src={logowhite} alt=""  />
        <p className="font-weight-normal text-white fs-5 text" >Create New Account</p>
        <p className="font-weight-normal text-white fs-5 text mr-4">Contact Us</p>
        </div>
        <BrowserRouter>
        <div className="d-flex d-flex flex-column align-items-center shadow-lg p-3 mb-5 bg-white rounded "style={{width:"950px", marginLeft:"270px" }}>
      
        <NavBar />
        <Routes>
          <Route path='/' element={<YourProfile />} />
          <Route path='/business' element={<BusinessInfo />} />
          <Route path='/Additional' element={<AdditionalUsers />} />
        </Routes>
      </div>
    </BrowserRouter>
    <div style={{textAlign:"right"}}>
       <button  style={{border:"none",width:"150px",height:"45px",borderRadius:"4px",backgroundColor:"blue",color:"white",marginRight:"70px"}}>Next step</button>
    </div>
    </section>   
    )
}

export default Background;