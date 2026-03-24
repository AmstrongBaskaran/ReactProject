import React from 'react'
import './CardView.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

function CardView() {
    return (
        <div className="simple-card-view">
            <Navbar />
            <div className="card-view-content">
                <div className="venue-image-container">
                    <img
                        src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3"
                        alt="Event"
                        className="venue-img"
                    />
                </div>
                <div className="venue-details-container">
                    <div className="venue-info">
                        <h1 className='headline'>Arun & Priya's Wedding</h1>
                        <p className="location">Date: 15 / 08 / 2026</p>

                        <div className="description">
                            <h3>Event Description</h3>
                            <p>We are excited to invite you to our wedding celebration. Join us for an evening of joy, dancing, and wonderful memories as we tie the knot!</p>
                        </div>
                        <div className="features">
                            <span className="feature-tag">Type: Wedding</span>
                            <span className="feature-tag">Guests: 500</span>
                        </div>
                    </div>
                    <div className="venue-action-box">
                        <div className="status-box">
                            {/* <h3>Status</h3> */}
                            {/* <p style={{ color: 'green', fontWeight: 'bold', marginTop: '10px' }}>Upcoming Event</p> */}
                        </div>
                        <button className="book-btn" style={{ marginTop: '20px' ,fontWeight:'bold'}}>Book Now</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CardView