
import React from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import Pos1 from '../assets/Group 89081.png'
import VidImg from '../assets/Frame 89246.png'
import Img2 from '../assets/bus man.png'
import Img3 from '../assets/image 3.png';
import Imgv from '../assets/video 1.png'
import { useState } from "react";
import './Pos.css'
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
                        <img className="Poimg" src={Pos1} alt="Smart Ticketing Machine" />
                        <div className="ptext">
                            <p className="center-text s1">ApniBus Ticket Machine</p>

                            <p className="center-text s3">Har machine me bus operator ke sabhi gps enable buses ke saare routes avaiable honge. Koi bhi machine kisi bhi bus par use kar sakte hai.</p>
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