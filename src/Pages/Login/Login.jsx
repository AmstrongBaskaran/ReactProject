import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) {
      setError("Email is required")
      return
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Enter a Valid Email");
      return
    }
    if (!password) {
      setError("Enter a password");
      return
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return
    }
    setError("");
    try {
      const res = await fetch("http://localhost:4000/api/users/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json()
      if (!res.ok) {
        setError(data.message || "Login failed");
      } else {
        alert("Login successfull");
        navigate("/");
        localStorage.setItem("token", data.token)
        console.log(data.token)
        localStorage.setItem("user", JSON.stringify(data.user))
        console.log(data.user)
      }
    }
    catch (err) {
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
          {error && <p className="error" style={{ color: "red" }}>{error}</p>}
          <button type="submit">Login</button>
        </form>

      </div>
    </div>
  );
}

export default Login;