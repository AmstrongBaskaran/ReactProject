import React from "react";
import "./Dashboard.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="dashboard">
        <h1>My Dashboard</h1>
        <p className="subtitle">Manage your events</p>

        <div className="card">
          <div className="header">
            <h2>My Events</h2>
          </div>

          <table>
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Type</th>
                <th>Date</th>
                <th>Guests</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Wedding</td>
                <td>Wedding</td>
                <td>12/05/2026</td>
                <td>200</td>
                <td>
                  <button className="approve">Approve</button>
                  <button className="reject">Reject</button>
                </td>
              </tr>

              <tr>
                <td>Amstrong</td>
                <td>Wedding</td>
                <td>25/03/2026</td>
                <td>300</td>
                <td>
                  <button className="approve">Approve</button>
                  <button className="reject">Reject</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;