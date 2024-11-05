import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Less from '../assets/less.png'
import Imgo from '../assets/Frame 76.png'
import QR from '../assets/image 5.png'
import PT from '../assets/Group 1000004893.png'
import './Details.css'
import Coupon from './Coupon'
function Detail(){
    
    const [selectedMethod, setSelectedMethod] = useState("");
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
      setChecked(!checked);
    };
   const navigate = useNavigate()
    const handleR = () => {
        navigate(-1);
    };


     return(
        <>

        {/* <Coupon/> */}
         <div className="detai">
        <img onClick={handleR} style={{margintop:"13px"}} className="less" src={Less} alt="" />
        <h4 style={{fontStyle:"Roboto",marginTop:"1px",marginLeft:"20px"}}>Order Details</h4>
        </div>
        <hr/>

        <div className="tab">
        <table className="tabl" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={headi}>Item</th>
            <th style={headi}>Quantity</th>
            <th style={headi}>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={cellStyle}>ApniBus Ticket Machine</td>
            <td style={cellStyle}>1</td>
            <td style={cellStyle}>₹ 4000</td>
          </tr>
          <tr>
            <td style={cellStyle}>GST(Inclusive)</td>
            <td style={cellStyle}></td>
            <td style={cellStyle}></td>
          </tr>
          <tr>
            <td style={headi1}>Total Amount</td>
            <td style={cellStyle}></td>
            <td style={cellStyle}>₹ 4000</td>
          </tr>
        </tbody>
      </table>
        </div> 

        <Coupon/>

       
       
        </>
     )
}

const cellStyle = {
    border: '1px solid #F3F3F3',
    padding: '8px',
    textAlign: 'center',
    whiteSpace: 'nowrap', // Prevents text from wrapping
    fontWeight: '400',
    fontSize: '2.4vw',
  };

  const headi={
    border: '1px solid #F3F3F3',
    padding: '8px',
    textAlign: 'center',
    whiteSpace: 'nowrap', // Prevents text from wrapping
    fontWeight: '550',
  }
  
  const headi1={
    border: '1px solid #F3F3F3',
    padding: '8px',
    textAlign: 'center',
    whiteSpace: 'nowrap', // Prevents text from wrapping
    fontWeight: '540',
    fontSize:'2.7vw',
  }
  


export default Detail
