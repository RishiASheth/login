import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

const Signup = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/signup", formData);
      alert(response.data.message);
      navigate("/login"); // Redirect to login after signup
    } catch (error) {
      console.error("Error during signup:", error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="auth-container">
      <h1>Signup</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
