import React from "react";
import "./EventCreate.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";

function EventCreate() {
    const navigate = useNavigate();
    const validationSchema = Yup.object({
        venueName: Yup.string()
            .required("Venue Name is required")
            .min(3, "Venue Name must be at least 3 characters")
            .max(100, "Venue Name must be less than 100 characters"),
        location: Yup.string().required("Location is required"),
        price: Yup.number()
            .required("Price is required")
            .positive("Price must be a positive number"),
        capacity: Yup.number()
            .required("Capacity is required")
            .positive("Capacity must be a positive number")
            .integer("Capacity must be an integer"),
        imageUrl: Yup.string(),
        venueDescription: Yup.string()
            .max(500, "Description must be less than 500 characters"),
    });

    const formik = useFormik({
        initialValues: {
            venueName: "",
            location: "",
            price: "",
            capacity: "",
            imageUrl: "",
            venueDescription: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => {
            const venueData = {
                venueName: values.venueName,
                location: values.location,
                price: Number(values.price),
                capacity: Number(values.capacity),
                imageUrl: values.imageUrl,
                venueDescription: values.venueDescription,
            };

            try {
                const token = localStorage.getItem("token");
                const response = await fetch("http://localhost:4000/api/events/create", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify(venueData),
                });
                const data = await response.json();
                if (response.ok) {
                    alert("Venue created successfully and sent for approval.");
                    resetForm();
                    navigate("/Dashboard");
                } else {
                    alert("Error: " + data.message);
                }
            } catch (error) {
                alert("An error occurred while creating the venue.");
            }
        },
    });

    return (
        <div className="eventcreate-container">
            <Navbar />
            <div className="eventcreate-page">
                <div className="eventcreate-box">
                    <div className="eventcreate-header">
                        <div className="eventcreate-icon">🏠</div>
                        <h1>Add New Venue</h1>
                    </div>

                    <form className="eventcreate-form" onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="venueName">Venue Name</label>
                            <input
                                type="text"
                                id="venueName"
                                name="venueName"
                                placeholder="Enter venue name"
                                value={formik.values.venueName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="location">Location</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                placeholder="Enter venue location"
                                value={formik.values.location}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                placeholder="Enter price per booking"
                                value={formik.values.price}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="capacity">Capacity</label>
                            <input
                                type="number"
                                id="capacity"
                                name="capacity"
                                placeholder="Enter guest capacity"
                                value={formik.values.capacity}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="imageUrl">Image URL</label>
                            <input
                                type="text"
                                id="imageUrl"
                                name="imageUrl"
                                placeholder="Enter image URL"
                                value={formik.values.imageUrl}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="venueDescription">Venue Description</label>
                            <textarea
                                id="venueDescription"
                                name="venueDescription"
                                placeholder="Describe the venue..."
                                rows="4"
                                value={formik.values.venueDescription}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        <div className="eventcreate-btns">
                            <button type="button" className="cancel-btn" onClick={() => navigate("/BrowseVenues")}>Cancel</button>
                            <button type="submit" className="create-btn">Create Venue</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default EventCreate;
