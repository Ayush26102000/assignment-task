import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css'


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div style={{display:'flex',alignItems:'center', justifyContent:'center'}} className="animate__animated animate__zoomInRight ">
    <div className="container">
      <h1>Login</h1>
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
