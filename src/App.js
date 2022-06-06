import { Route, Routes } from "react-router-dom";
import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home'
import Login from './pages/Login'
import "./App.css";
import RequiredAuth from "./hoc/RequiredAuth";
import Products from './components/Products/Products'
import Product from './components/Products/Product/Product'

function App() {
  return (
    <div className="App">
    
       <Navbar/>
     
        <Routes>

          <Route path="/" element={
            <RequiredAuth> <Home/></RequiredAuth>}/>
          <Route path="/Products*" element={<RequiredAuth><Products/></RequiredAuth>}/>
          <Route path="/Login" element={<Login/>}/>

        </Routes>
        
      
    </div>
  );
}

export default App;
