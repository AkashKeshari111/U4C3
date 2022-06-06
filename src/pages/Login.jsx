import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from 'axios'

import logincss from './logincss.module.css'

const Login = () => {

  const {login}=useContext(AuthContext)

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

 const handleLogin=()=>{
  axios({
    url:`https://reqres.in/api/login`,
    method:"POST",
    data:{
      email,password
    }
  }).then((res)=>{
    alert("Success")
    login()
  }).catch((err)=>{
    console.log(err.message)
    alert("Wrong Credentials")
  })
 }



  return (
    <div>
      <br/><br/>
      <input className={logincss.box2} data-cy="login-email" type="email" value={email} onChange={(e)=>(setEmail(e.target.value))} />
      <br/><br/>
      <input className={logincss.box2} data-cy="login-password" type="password" value={password} onChange={(e)=>(setPassword(e.target.value))}/>
      <br/><br/>
      <button data-cy="login-submit" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
