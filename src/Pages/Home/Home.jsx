import React from "react";
import "./Home.css";
import Venuecard from "../../Components/Venuecard/Venuecard";
import Eventcategories from "../../Components/Eventcategories/Eventcategories";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router";

function Home() {
  return (
    <div className="home">
      <Navbar/>
      <div className="hero">
        <h1>Find Your Perfect Event Venue</h1>
        <p>
          Discover and book stunning venues for weddings, birthdays, corporate
          events, and more
        </p>
        <div className="search-box">
          <input type="text" placeholder=" Search venues..." />
          <button className="searchbtn">Search</button>
        </div>
      </div>
      <div className="crdsec">
      <h1 className="featured">Featured Venues</h1>
      <div className="cardparent">
        <Venuecard />
        <Venuecard />
        <Venuecard />
      </div>
      <div className="viewall-btn-div">
        <Link to="/BrowseVenues"><button className="view-all">View All Venues</button></Link>
      </div>
      </div>
      <Eventcategories />
      <Footer/>
    </div>
    
  );
}

export default Home;