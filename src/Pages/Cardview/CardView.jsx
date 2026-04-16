import React from 'react';
import './CardView.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { useLocation, Link } from 'react-router-dom';

function CardView() {
    // Get data passed from the previous page
    var location = useLocation();
    var venue = location.state ? location.state.venue : null;

    // Default image if the venue doesn't have one
    var defaultImage = "https://images.unsplash.com/photo-1519167758481-83f550bb49b3";

    // If there is no venue data (e.g., someone directly visited the link without clicking a card), show a "Not Found" message
    if (!venue) {
        return (
            <div className="simple-card-view">
                <Navbar />
                <div style={{ textAlign: 'center', padding: '50px' }}>
                    <h2>Venue not found!</h2>
                    <p>Please go back and select a venue.</p>
                    <Link to="/BrowseVenues">
                        <button style={{ padding: '10px 20px', cursor: 'pointer' }}>Go Back</button>
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    // Determine which image to show
    var imageToShow = venue.imageUrl || defaultImage;

    return (
        <div className="simple-card-view">
            <Navbar />
            <div className="card-view-content">

                {/* Left side: Venue Image */}
                <div className="venue-image-container">
                    <img
                        src={imageToShow}
                        alt={venue.venueName}
                        className="venue-img"
                    />
                </div>

                {/* Right side: Venue Details */}
                <div className="venue-details-container">
                    <div className="venue-info">
                        <h1 className='headline'>{venue.venueName}</h1>
                        <p className="location">Location: {venue.location}</p>

                        <div className="description">
                            <h3>Event Description</h3>
                            <p>{venue.venueDescription ? venue.venueDescription : "No description provided."}</p>
                        </div>

                        <div className="features">
                            <span className="feature-tag">Capacity: {venue.capacity} guests</span>
                            <span className="feature-tag">Price: ₹{venue.price}</span>
                        </div>
                    </div>

                    {/* Booking Action */}
                    <div className="venue-action-box">
                        <button className="book-btn" style={{ marginTop: '20px', fontWeight: 'bold' }}>
                            Book Now
                        </button>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default CardView;