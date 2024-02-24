import { useState } from "react";
import { GoChevronRight } from "react-icons/go";
import {FaGreaterThan} from "react-icons/fa";
import {FaXmark} from "react-icons/fa6";
import {FaCheck} from "react-icons/fa6";

function Form2B(){
   
    let myStyle={width:"350px"}
    let [formData,setFormData]=useState({bname:"",btype:"",adress:"",city:"",ZipCode:"",tax:""})
  


  function inputHandler(e){
    setFormData({
        ...formData,[e.target.name]:e.target.value
    })
}

    return(
      <div>
        <form className="d-flex flex-wrap justify-content-xl-around " >
        <div className="mb-3">
        <label htmlFor="fname mb-2">Brand Name*</label>
        <input type="text" name="bname" id="bname" className="form-control" placeholder="enter Brand name" style={myStyle} onChange={inputHandler} value={formData.bname}/>
        </div>
        <div className="mb-3">
        <label htmlFor="btype">Brand Type</label>
        <select id="btype" name="btype" className="form-control" placeholder="select Brand type" style={myStyle} onChange={inputHandler} value={formData.btype}>
            <option>select Brand type</option>
            <option value="nyka">Nyka</option>
            <option value='Meesho'>Meesho</option>
            <option value='Ajio'>Ajio</option>


        </select>
        
        </div>
        <div className="mb-3">
        <label htmlFor="adress">Street Adresss*</label>
        <input type="text" name="adress" id="adress" className="form-control" placeholder="enter adress" style={myStyle}  onChange={inputHandler} value={formData.adress}/>
        </div>
        <div className="mb-3">
        <label htmlFor="pno">City*</label>
        <input type="text" name="city" id="city" className="form-control" placeholder="enter city " style={myStyle}  onChange={inputHandler} value={formData.city}/>
        </div>
        <div className="mb-3">
        <label htmlFor="ZipCode">Zip Code*</label>
        <input type="text" name="Zip Code" id="ZipCode" className="form-control" placeholder="enter Zip Code" style={myStyle}  onChange={inputHandler} value={formData.ZipCode}/>
        </div >
        <div className="mb-3">
        <label htmlFor="tax">Tax Id Number</label>
        <input type="text" name="tax" id="tax" className="form-control" placeholder="Enter Tax Id Number" style={myStyle}  onChange={inputHandler} value={formData.tax}/>
        </div>
        </form>
        <div>
            <p style={{marginLeft:"60px",marginTop:"20px" ,color:"blue"}}>DOCUMENTS</p>
            <p  style={{marginLeft:"60px",marginTop:"20px" }}>Once the following documents are signed,you will be ready to get started</p>
             <input type="text" placeholder="Electronically sign the agreements" style={{width:"570px",height:"40px",marginLeft:"60px",marginBottom:"18px" }} />
             <FaCheck className="mark1" /><GoChevronRight className="left_arrow"/>
             <input type="text" placeholder="Electronically sign the agreements" style={{width:"570px",height:"40px",marginLeft:"60px"}} />
             <FaXmark className="mark1" style={{color:"red"}} /><GoChevronRight className="left_arrow"/>
        </div>
        <div>
            <p style={{marginLeft:"60px",marginTop:"20px" ,color:"blue"}}>COI PDF UPLOAD</p>
            <p  style={{marginLeft:"60px",marginTop:"20px" }}>Once the following documents are signed,you will be ready to get started</p>
             <input type="text" placeholder="Electronically sign the agreements" style={{width:"570px",height:"40px",marginLeft:"60px",marginBottom:"18px" }} />
             <FaCheck className="mark1" /><GoChevronRight className="left_arrow"/>
        </div>
      </div>
    )
}
export default Form2B