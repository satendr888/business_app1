// OrderDetails.jsx
import React, { useState } from 'react';
import { ChevronLeft, CreditCard, QrCode } from 'lucide-react';
import './Coupon.css';
import Tic from '../assets/Ticket.png'

const Coupon = () => {
  const [selectedPayment, setSelectedPayment] = useState('');
  const [couponCode, setCouponCode] = useState('');

  const handlePayment = () => {
    if (!selectedPayment) {
      alert('Please select a payment method');
      return;
    }
    console.log('Processing payment via:', selectedPayment);
  };

  return (
    <div className="container">
      {/* Header */}
      

      <div className="content">
        {/* Order Summary */}
        
             

        {/* Offers & Discounts */}
        <div className="offers-section">
          <div className="offers-header">
            <span className="offer-icon"><img style={{height:"5vh", marginTop:"7px"}} src={Tic} alt="" /></span>
            <h2>Offers & Discounts</h2>
          </div>
          <div className="coupon-input">
            <input
              type="text"
              placeholder="Have a coupon code?"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button className="apply-button">Apply</button>
          </div>
        </div>

        {/* Payment Options */}
        <div className="card payment-options">
          <h2>Select Payment Option</h2>
          
          <div 
            className="payment-option"
            onClick={() => setSelectedPayment('qr')}
          >
            <div className="option-label">
              <QrCode className="payment-icon" />
              <span>Payment QR</span>
            </div>
            <div className={`radio ${selectedPayment === 'qr' ? 'selected' : ''}`}>
              <div className="radio-inner"></div>
            </div>
          </div>

          <div 
            className="payment-option"
            onClick={() => setSelectedPayment('gateway')}
          >
            <div className="option-label">
              <CreditCard className="payment-icon" />
              <span>Payment Gateway</span>
            </div>
            <div className={`radio ${selectedPayment === 'gateway' ? 'selected' : ''}`}>
              <div className="radio-inner"></div>
            </div>
          </div>
        </div>

        {/* Pay Button */}
        <button className="pay-button" onClick={handlePayment}>
          Pay
        </button>
      </div>
    </div>
  );
};

export default Coupon;