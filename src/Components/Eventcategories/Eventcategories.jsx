import React from 'react'
import './Eventcategories.css'

function Eventcategories() {
  return (
    <div className="event-container">
        <h1>Event Categories</h1>
        <p>
          Browse venues by event type and find the perfect match for your celebration
        </p>

        <div className="event-cards">
          <div className="event-card">
            <div className="icon pink">💍</div>
            <h3>Wedding</h3>
          </div>

          <div className="event-card">
            <div className="icon purple">🎂</div>
            <h3>Birthday</h3>
          </div>

          <div className="event-card">
            <div className="icon blue">💼</div>
            <h3>Corporate</h3>
          </div>

          <div className="event-card">
            <div className="icon green">⚽</div>
            <h3>Sports</h3>
          </div>
        </div>
      </div>
  )
}

export default Eventcategories