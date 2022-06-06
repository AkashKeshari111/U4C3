import { Grid } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {

  const {isAuth,logout}=useContext(AuthContext)
  const navigate=useNavigate()
  const {count,setCount}=useContext(CartContext)
  const goToLogin= ()=>{
 
   
    if(isAuth){
      logout()
    }
    else{
      navigate("/Login")
      
    }
      
  }
  return (
    <div data-cy="navbar">
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
      <Link to="/" data-cy="navbar-home-link" >Logo</Link>
      <span data-cy="navbar-cart-items-count">Cart:{count}</span>
      <button onClick={goToLogin} data-cy="navbar-login-logout-button" >{isAuth?"Logout":"Login"}</button>
      </Grid>
     
    </div>
  );
};

export default Navbar;
