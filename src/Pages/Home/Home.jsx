import React, { useState, useEffect } from "react";
import "./Home.css";
import Venuecard from "../../Components/Venuecard/Venuecard";
import Eventcategories from "../../Components/Eventcategories/Eventcategories";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router";

function Home() {

  // Store the list of featured events
  const [featuredEvents, setFeaturedEvents] = useState([]);

  // This runs when the page loads — fetches approved events from backend
  useEffect(function() {
    fetchEvents();
  }, []);

  // Fetch approved events from the backend API
  async function fetchEvents() {
    try {
      var response = await fetch("http://localhost:4000/api/events/");
      var data = await response.json();
      if (response.ok) {
        // Only show first 3 events as "featured"
        setFeaturedEvents(data.slice(0, 3));
      }
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  }

  return (
    <div className="home">

      {/* Top navigation bar */}
      <Navbar />

      {/* Hero / Banner section */}
      <div className="hero">
        <h1>Find Your Perfect Event Venue</h1>
        <p>Discover and book stunning venues for weddings, birthdays, corporate events, and more</p>
        <div className="search-box">
          <input type="text" placeholder=" Search venues..." />
          <button className="searchbtn">Search</button>
        </div>
      </div>

      {/* Featured Venues section */}
      <div className="crdsec">
        <h1 className="featured">Featured Venues</h1>
        <div className="cardparent">

          {/* If events exist, show them. Otherwise show a message */}
          {featuredEvents.length > 0 ? (
            featuredEvents.map(function(event) {
              return <Venuecard key={event._id} venue={event} />;
            })
          ) : (
            <p style={{ textAlign: "center", width: "100%", color: "#888" }}>
              No featured venues available yet.
            </p>
          )}

        </div>
        <div className="viewall-btn-div">
          <Link to="/BrowseVenues">
            <button className="view-all">View All Venues</button>
          </Link>
        </div>
      </div>

      {/* Event categories section */}
      <Eventcategories />

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default Home;