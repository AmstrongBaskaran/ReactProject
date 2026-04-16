import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function Dashboard() {

  // Store the list of pending events waiting for approval
  var [pendingEvents, setPendingEvents] = useState([]);

  // When page loads, fetch pending events
  useEffect(function() {
    fetchPendingEvents();
  }, []);

  // Get all pending events from backend (needs login token)
  async function fetchPendingEvents() {
    try {
      var token = localStorage.getItem("token");
      var response = await fetch("http://localhost:4000/api/events/pending", {
        headers: {
          Authorization: "Bearer " + token
        }
      });
      var data = await response.json();
      if (response.ok) {
        setPendingEvents(data);
      }
    } catch (err) {
      console.error("Error fetching pending events:", err);
    }
  }

  // Approve an event by its ID
  async function handleApprove(id) {
    try {
      var token = localStorage.getItem("token");
      await fetch("http://localhost:4000/api/events/approve/" + id, {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + token
        }
      });
      // Refresh the list after approving
      fetchPendingEvents();
    } catch (err) {
      console.error("Error approving event:", err);
    }
  }

  // Reject an event by its ID
  async function handleReject(id) {
    try {
      var token = localStorage.getItem("token");
      await fetch("http://localhost:4000/api/events/reject/" + id, {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + token
        }
      });
      // Refresh the list after rejecting
      fetchPendingEvents();
    } catch (err) {
      console.error("Error rejecting event:", err);
    }
  }

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>My Dashboard</h1>
        <p className="subtitle">Manage pending events</p>

        <div className="card">
          <div className="header">
            <h2>Pending Event Approvals</h2>
          </div>

          <table>
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Location</th>
                <th>Price</th>
                <th>Guests</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

              {/* Show each pending event as a table row */}
              {pendingEvents.map(function(event) {
                return (
                  <tr key={event._id}>
                    <td>{event.venueName}</td>
                    <td>{event.location}</td>
                    <td>₹{event.price}</td>
                    <td>{event.capacity}</td>
                    <td>
                      <button className="approve" onClick={function() { handleApprove(event._id); }}>
                        Approve
                      </button>
                      <button className="reject" onClick={function() { handleReject(event._id); }}>
                        Reject
                      </button>
                    </td>
                  </tr>
                );
              })}

              {/* If no pending events, show a message */}
              {pendingEvents.length === 0 && (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
                    No pending events for approval
                  </td>
                </tr>
              )}

            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;