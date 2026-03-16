import React from 'react'
import './EventCreate.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

function EventCreate() {
    return (
        <div className="eventcreate-container">
            <Navbar />
            <div className="eventcreate-page">
                <div className="eventcreate-box">

                <div className="eventcreate-header">
                    <div className="eventcreate-icon">📅</div>
                    <h1>Create New Event</h1>
                </div>

                <form className="eventcreate-form">

                    <div className="form-group">
                        <label htmlFor="eventName">Event Name</label>
                        <input
                            type="text"
                            id="eventName"
                            placeholder="Enter event name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="eventType">Event Type</label>
                        <select id="eventType">
                            <option value="wedding">Wedding</option>
                            <option value="birthday">Birthday</option>
                            <option value="corporate">Corporate</option>
                            <option value="sports">Sports</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="eventDate">Event Date</label>
                        <input
                            type="date"
                            id="eventDate"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="guestCount">Expected Guest Count</label>
                        <input
                            type="number"
                            id="guestCount"
                            placeholder="Enter number of guests"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="eventDescription">Event Description</label>
                        <textarea
                            id="eventDescription"
                            placeholder="Describe your event..."
                            rows="4"
                        />
                    </div>

                    <div className="eventcreate-btns">
                        <button type="button" className="cancel-btn">Cancel</button>
                        <button type="submit" className="create-btn">Create Event</button>
                    </div>

                </form>
            </div>
        </div>
            <Footer />
        </div>
    )
}

export default EventCreate