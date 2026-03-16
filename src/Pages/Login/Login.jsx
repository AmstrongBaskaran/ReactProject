import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Eventify</h1>
        <h2>Welcome Back</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
          />
          <button type="submit">Login</button>
        </form>
        <p className="signup-link">
        </p>
      </div>
    </div>
  );
}

export default Login;
