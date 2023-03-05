import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css'


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',background:'#2C3333',height:'100vh'}} >
    <h1 className="animate__animated animate__zoomInRight ">Welcome to the Log in Page</h1>
    <div className="container animate__animated animate__zoomInRight ">
      <h1 style={{color:'#0E8388'}}>Login</h1>
      <div className="form ">
        
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Name..."
        />
      
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your Password..."
        />
        <Link to={'/Dashboard'} >
          <button type="submit" >Log In</button></Link>
      </div>
    </div>
    </div>
  );
};

export default Login;
