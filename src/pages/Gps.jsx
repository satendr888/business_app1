
import React from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import Pos1 from '../assets/Group 89081.png'
import VidImg from '../assets/Frame 89246.png'
import Img2 from '../assets/bus man.png'
import Img3 from '../assets/image 3.png';
import Imgv from '../assets/video 1.png'
import Gps from '../assets/gps 1.png'
import { useState } from "react";
import './Gps.css'
function Pos() {

    const navigate  =  useNavigate();

    const handleRedirect = (path) => {
      navigate(path);
    };

    const [count, setCount] = useState(0);
    return (
        <>
            <Navbar />
            <div>
                <div className="Pos">
                    <div className="Pocent">
                        <img className="Poimg" src={Gps} alt="Smart Ticketing Machine" />
                        <div className="ptext">
                            <p className="center-text s1">GPS Live Tracking</p>

                            <p className="center-text s3">Track your bus with ApniBus smart intercity bus tracking solution and enable to</p>
                        </div>
                    </div>

                    <div className="Seat">
                        <p style={{
    fontWeight:"35vw"}} >Select number of ticket machine</p>
                        <div className="Sbtn">
                            <button className="inc"  onClick={()=>setCount(count+1)}> +</button>
                            <div className="cnt"> 
                            <h4 style={{margin:"-4px"}}>{count}</h4>
                            </div>
                            
                            <button className="dec" disabled ={count==0} onClick={()=>setCount(count-1)}>-</button>
                        </div>
                    </div>

                    <div className="btnb">
                        <button onClick={()=>handleRedirect('/src/Components/Details')} className="btnb1">Buy</button>
                    </div>


                </div>
            </div>


        </>
    )
}

export default Pos;