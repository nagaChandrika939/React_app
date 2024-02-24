import { useState } from "react";

import NavBar from "./navbar";
function Form2A(){

    let myStyle={width:"350px"}
    let [formData,setFormData]=useState({fname:"",lname:"",email:"",pno:"",password:"",confirmPwd:""})
  


  function inputHandler(e){
    setFormData({
        ...formData,[e.target.name]:e.target.value
    })
     
    
  }
  return(
        <form className="d-flex flex-wrap justify-content-xl-around " >
           <div className="mb-3">
           <label htmlFor="fname mb-2">First Name*</label>
           <input type="text" name="fname" id="fname" className="form-control" placeholder="enter name" style={myStyle} onChange={inputHandler} value={formData.fname}/>
           </div>
           <div className="mb-3">
           <label htmlFor="lname">Last Name</label>
           <input type="text" name="lname" id="lname" className="form-control" placeholder="enter lname" style={myStyle}  onChange={inputHandler} value={formData.lname}/>
           </div>
           <div className="mb-3">
           <label htmlFor="email">Email*</label>
           <input type="email" name="email" id="email" className="form-control" placeholder="enter email" style={myStyle}  onChange={inputHandler} value={formData.email}/>
           </div>
           <div className="mb-3">
           <label htmlFor="pno">Phone Number*</label>
           <input type="tel" name="pno" id="pno" className="form-control" placeholder="enter Phone number" style={myStyle}  onChange={inputHandler} value={formData.pno}/>
           </div>
           <div className="mb-3">
           <label htmlFor="pwd">Password*</label>
           <input type="password" name="password" id="pwd" className="form-control" placeholder="enter password" style={myStyle}  onChange={inputHandler} value={formData.password}/>
           </div >
           <div className="mb-3">
           <label htmlFor="cpwd">Confirm Password</label>
           <input type="password" name="confirmPwd" id="cpwd" className="form-control" placeholder="Confirm your password" style={myStyle}  onChange={inputHandler} value={formData.confirmPwd}/>
           </div>
          
           
        </form>
    )
}

export default Form2A;