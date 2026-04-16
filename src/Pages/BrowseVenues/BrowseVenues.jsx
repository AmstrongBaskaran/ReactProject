import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Venuecard from '../../Components/Venuecard/Venuecard';
import './BrowseVenues.css';

function BrowseVenues() {
  // State to hold the events (venues) from the backend
  var [events, setEvents] = useState([]);

  // Fetch all approved events when the page loads
  useEffect(function() {
    async function fetchEvents() {
      try {
        var res = await fetch("http://localhost:4000/api/events/");
        var data = await res.json();
        
        if (res.ok) {
          // Store the fetched events in our state
          setEvents(data);
        }
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    }
    
    // Call the function
    fetchEvents();
  }, []);

  return (
    <div className='browse-venues-page'>
        <Navbar />
        
        <div className="browse-venues-banner">
            <h1>Browse Venues</h1>
            
            <div className="search-controls">
                <div className="search-input-wrapper">
                    <span className="search-icon">🔍</span>
                    <input type="text" placeholder="Search by name, location..." />
                </div>
                
                <select className="category-select">
                    <option value="">All Categories</option>
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday</option>
                    <option value="corporate">Corporate</option>
                    <option value="sports">Sports</option>
                </select>
        
                <button className="search-btn">Search</button>
            </div>
        </div>

        <div className="venues-content">
            <div className="venues-grid">
                {events.length > 0 ? (
                    // Loop through the events and display a Venuecard for each one
                    events.map(function(evt) {
                        return <Venuecard key={evt._id} venue={evt} />;
                    })
                ) : (
                    // Show a message if no events are found
                    <p style={{ textAlign: 'center', width: '100%', gridColumn: '1 / -1' }}>
                        No approved venues found.
                    </p>
                )}
            </div>
        </div>

        <Footer />
    </div>
  );
}

export default BrowseVenues;