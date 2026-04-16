import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router";

function Navbar() {

  // Dark theme state - true means dark, false means light
  const [darkTheme, setDarkTheme] = useState(false);

  // Track if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // navigate is used to go to another page
  const navigate = useNavigate();

  // When dark theme changes, apply it to the page
  useEffect(function() {
    document.documentElement.setAttribute("data-darkTheme", darkTheme);
  }, [darkTheme]);

  // When page loads, check if user already logged in
  useEffect(function() {
    var token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  // Toggle dark/light theme
  function handleTheme() {
    setDarkTheme(!darkTheme);
  }

  // Logout: clear saved data, go to home page
  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  }

  return (
    <div className="navbar">

      {/* Logo / Brand name */}
      <div className="title">
        <p>Eventify</p>
      </div>

      {/* Navigation Links */}
      <div className="navlist">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Home</li>
          </Link>
          <Link to="/BrowseVenues" style={{ textDecoration: "none" }}>
            <li>Venue</li>
          </Link>
        </ul>
      </div>

      {/* Buttons section */}
      <div className="btns">

        {/* Dark/Light theme toggle icon */}
        <p onClick={handleTheme}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
            <path fill="CurrentColor" d="M10 3.5a6.5 6.5 0 1 1 0 13zM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16" />
          </svg>
        </p>

        {/* If logged in show Logout, else show Login and Signup */}
        {isLoggedIn ? (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <div style={{ display: "flex", gap: "10px" }}>
            <Link to="/Login">
              <button>Login</button>
            </Link>
            <Link to="/Signup">
              <button>Signup</button>
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}

export default Navbar;
