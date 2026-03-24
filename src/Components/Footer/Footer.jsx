import React from 'react'
import './Footer.css'
import { Link } from 'react-router'

function Footer() {
  return (
    <div className="footer">

      <div className="footer-section">
        <h2>Eventify</h2>
        <p>Find your perfect event venue and make your celebrations memorable.</p>
      </div>

      <div className="footer-section">
        <h3>Quick Links</h3>
        <p>Home</p>
        <p>Venues</p>
        <Link to="/EventCreate" style={{textDecoration:"none", color:"White"}}><p>Create Event</p></Link>
         <Link to="/Dashboard" style={{textDecoration:"none", color:"White"}}><p>DashBoard</p></Link>
      </div>

      <div className="footer-section">
        <h3>Categories</h3>
        <p>Wedding</p>
        <p>Birthday</p>
        <p>Corporate</p>
        <p>Sports</p>
      </div>

      <div className="footer-section">
        <h3>Contact</h3>
        <p>eventify.com</p>
        <p>+91 123456789</p>
        <p>Global infocity,chennai </p>
      </div>

    </div>
  )
}

export default Footer