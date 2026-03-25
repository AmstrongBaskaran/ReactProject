import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email){
      setError("Email is required")
      return
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)){
      setError("Enter a Valid Email");
      return
    }
    if (!password){
      setError("Enter a password");
      return
    }
    if (password.length < 6){
      setError("Password must be at least 6 characters");
      return
    }
    setError("");
    try{
      const res = await fetch("",{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({email,password})
      });
      const data = await res.json
      if(!res){
        setError(data.message);
      }else{
        alert("login successfull")
      }
    }
     catch(err){
      setError("Server Error")
     }

  }
  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Eventify</h1>
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            
          />
          {error && <p className="error" style={{color:"red"}}>{error}</p>}

          <button type="submit">Login</button>
        </form>

      </div>
    </div>
  );
}

export default Login;