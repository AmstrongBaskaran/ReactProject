import React from "react";
import "./Sign.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";

function Signup() {
  const navigate = useNavigate()
  const validationSchema = Yup.object({
    fullname: Yup.string()
      .required("Fullname is required")
      .min(3, "Full Name must be at least 3 characters")
      .max(50, "Full Name must be less than 50 characters"),
    email: Yup.string()
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
      .required("Phone number is required"),
    password: Yup.string()
      .min(6, "password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,

    onSubmit: async (values, { resetForm }) => {
      const userData = {
        fullname: values.fullname,
        email: values.email,
        phone: values.phone,
        password: values.password,
      };
      try {
        const response = await fetch("http://localhost:4000/api/users/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
        const data = await response.json();
        if (response.ok) {
          alert("SignUp Successful");
          resetForm();
          navigate("/Login")
        } else {
          alert("Error" + data.message);
        }
      } catch {
        console.error("Error during signup");
        alert("An error occurred while signing up. Please try again later.");
      }
    },
  });
  return (
    <div className="signup-page">
      <div className="signup-box">
        <h1>Eventify</h1>
        <form onSubmit={formik.handleSubmit}>
          <h2>Create Account</h2>
          <label htmlFor="fullname">Full Name:</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Enter your full name"
            value={formik.values.fullname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <button type="submit">Sign Up</button>
        </form>
        <p className="login-link"></p>
      </div>
    </div>
  );
}

export default Signup;
