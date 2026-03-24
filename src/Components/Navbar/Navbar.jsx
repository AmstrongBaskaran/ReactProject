import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router";


function Navbar() {
  const[darkTheme,setDarkTheme] = useState(false);
  const handleTheme=()=>{
    setDarkTheme(!darkTheme)
  }
  useEffect(()=>{
    document.documentElement.setAttribute('data-darkTheme',darkTheme)
  },[darkTheme]);

  return (
    <div className="navbar">
      <div className="title">
        <p>Eventify</p>
      </div>
      <div className="navlist">
        <ul>
          <Link to="/" style={{textDecoration: "none"}}><li>Home</li></Link>
          <Link to="/BrowseVenues" style={{textDecoration: "none"}} ><li>Venue</li></Link>
        </ul>
      </div>
      <div className="btns">
        <p onClick={handleTheme}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
          >
            <path
              fill="CurrentColor"
              d="M10 3.5a6.5 6.5 0 1 1 0 13zM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16"
            />
          </svg>
        </p>
        <Link to="/Login"><button>Login</button></Link>
        <Link to="/Signup"><button>Signup</button></Link>
      </div>
    </div>
  );
}

export default Navbar;

