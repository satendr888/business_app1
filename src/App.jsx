import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; 

import Header from "./pages/Header";
import Pos from './pages/Pos'
import Gps from './pages/Gps'
import Details from '../src/Components/Details'

// import Test from './pages/test'

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/pages/Pos" element={<Pos />} />
      <Route path="/pages/Gps" element={<Gps />} />
      <Route path="/src/Components/Details" element={<Details />} />
      
    </Routes>
  </BrowserRouter>

   
  );
}

export default App;
