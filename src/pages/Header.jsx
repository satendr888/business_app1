import React from "react";
import {useNavigate} from 'react-router-dom'
import myImage from '../assets/image 1.png';
import Man from '../assets/image (1).png';
import Wimg from '../assets/Group 89075.svg'
import Pos from '../assets/Group 89081.png'
import VidImg from '../assets/Frame 89246.png'
import Img2 from '../assets/bus man.png'
import Img3 from '../assets/image 3.png';
import Imgv from '../assets/video 1.png'
import Gps from '../assets/gps 1.png';
import VideoCarousel from "../Components/Video";
// import pos from './Pos'
import './Header.css'
function Header() {
  
  const navigate  =  useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <div className="Par">
      <div className="header"> 
      <img className="ImgLogo" src={myImage} alt="My Image" />
      <button className="logoutbtn">LogOut</button>
      </div>
      <hr style={{marginTop:"0px"}}/>
      
      <div className="Agent">
        <img className="manimg" src={Man} alt="" />
        <p className="Con">satendra <br/> +91-8006245734</p>
      </div>
      <div className="Warn">
        <img className="Wimg" src={Wimg} alt="" />
      </div>
      <div className="video">
      <VideoCarousel/>
      </div>


<div className="Pos">
  <div className="Pocent">
    <img className="Poimg" src={Pos} alt="Smart Ticketing Machine" />
    <div className="ptext">
      <p className="center-text s1">स्मार्ट टिकटिंग मशीन</p> 
      <p className="center-text s2">से बढ़ाएं अपने रोजाना की कमाई 1500 <br/>से 2000 तक बढ़ाएं</p>
      <p className="center-text s3">राजस्थान में 1000 से भी जयादा कंडक्टर इसे <br/> आसानी से यूज़ कर रहे है</p>
    </div>
  </div>
  <div className="button">
    <div className="btn">
      <button  className="btn1">
        <span className="spimg">  <img  style={{width:"8vw"}} src={Imgv} alt="" />   विडियो में देखें कैसे </span>
      </button>
      <button onClick={()=>handleRedirect('/pages/Pos')} className="btn2">आर्डर केरे</button>
    </div>
  </div>
</div>

<div className="Gps">
  <div className="Gpsc">
    <img className="Gimg" src={Gps} alt="Smart Ticketing Machine" />
    <div className="Gtext">
      <p className="Genter-text g1">GPS से लाइव ट्रैकिंग</p> 
      <p className="Genter-text g2">से पाएं पल पल की जानकारी</p>
      <p className="Genter-text g3">स्पेशल बस बिज़नेस के लिए ही बनाया गया <br/>ट्रैकिंग सोलुशन </p>
    </div>
  </div>
  <div className="buttong">
    <div className="btng">
    
      <button className="btn1g">
      <span className="spimg">  <img style={{width:"8vw"}} src={Imgv} alt="" />   विडियो में देखें कैसे </span>
      </button>
      <button  onClick={()=>handleRedirect('/pages/Gps')} className="btn2g">आर्डर केरे</button>
    </div>
  </div>
</div>

  <div className="Contact">
      <div className="Imgc">
         <img  className="Bus"  src={Img2} alt="" />
       
        
         
      </div>
      <div className="Conp">
        
        <div className="Digi">
        <h3 className="ig g4" style={{color:"#850085"}}>डिजिटल बस बिज़नेस के फायदे</h3>
        <h5 className="inq g4">जानकारी के लिए</h5>
        </div>
    <div className="cbtn">
      <button className="cbtn1">कॉल करें </button>
      <button className="cbtn1">व्हाट्सप्प करें</button>
    </div>
    </div>
  </div>


    </div>
  );
}

export default Header;
