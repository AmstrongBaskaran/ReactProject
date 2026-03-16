import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Venuecard from '../../Components/Venuecard/Venuecard'
import './BrowseVenues.css'

function BrowseVenues() {
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
                <Venuecard />
                <Venuecard />
                <Venuecard />
                <Venuecard />
                <Venuecard />
                <Venuecard />
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default BrowseVenues