import React from "react";
import "./Sign.css";

function Signup() {
  return (
    <div className="signup-page">
      <div className="signup-box">
        <h1>Eventify</h1>
        <form>
          <h2>Create Account</h2>
          <label htmlFor="fullname">Full Name:</label>
          <input type="text" id="fullname" placeholder="Enter your full name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" />

          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" placeholder="Enter your phone number" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
          />

          <button type="submit">Sign Up</button>
        </form>
        <p className="login-link">
        </p>
      </div>
    </div>
  );
}

export default Signup;
