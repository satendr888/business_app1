import React from "react";
import { useNavigate } from "react-router-dom";
import Img from '../assets/image 1.png';
import Less from '../assets/less.png'
// import Header from "../pages/Header";
import './Navbar.css'
function Navbar(){
   const navigate  =  useNavigate();

  const handleRedirect = () => {
    navigate(-1);
  };
    return(
       <div className="Par"> 
        <div className="front">
           <img onClick={handleRedirect} style={{margintop:"13px"}} className="less" src={Less} alt="" /> 
           <img style={{width:"25vw",height:"5vh"}} className="bus" src={Img} alt="" />
          
        </div>
        <hr/>
       </div>
    )
}

export default Navbar;


