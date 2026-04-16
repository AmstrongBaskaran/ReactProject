import React from 'react';
import './Venuecard.css';
import { Link } from 'react-router-dom';

// Fallback image if venue has no image URL
var FALLBACK_IMG = "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&auto=format&fit=crop";

function Venuecard({ venue }) {

  // If no venue data passed, don't show anything
  if (!venue) {
    return null;
  }

  // Use venue image if available, else use fallback image
  var imageToShow;
  if (venue.imageUrl && venue.imageUrl.trim() !== "") {
    imageToShow = venue.imageUrl;
  } else {
    imageToShow = FALLBACK_IMG;
  }

  return (
    <div className="cards">

      {/* Venue image at the top */}
      <div className="img-div">
        <img 
          src={imageToShow} 
          alt={venue.venueName} 
          className="venue-img" 
        />
        <span className="tag">Event</span>
      </div>

      {/* Venue details */}
      <div className="card-content">
        <h2 className="venue-title">{venue.venueName}</h2>
        <p className="location">{venue.location}</p>
        <div className="details">
          <span className="guests">{venue.capacity} guests</span>
          <span className="price">₹{venue.price}</span>
        </div>

        {/* Button to go to full detail page */}
        <Link to={"/CardView/" + venue._id} state={{ venue: venue }}>
          <button className="view-btn">View Details</button>
        </Link>
      </div>

    </div>
  );
}

export default Venuecard;