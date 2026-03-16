import React from 'react'
import './Venuecard.css'

function Venuecard() {
  return (
    <div className="cards">
      <div className="img-div">
        <span className="tag">wedding</span>
      </div>
      <div className="card-content">
        <h2 className="venue-title">Grand Mall</h2>
        <p className="location">Chennai VR Mall</p>
        <div className="details">
          <span className="guests">300 guests</span>
          <span className="price">5,000/day</span>
        </div>
        <button className="view-btn">View Details</button>
      </div>
    </div>
  )
}

export default Venuecard