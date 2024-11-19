import React, { useState } from "react";
import axios from "axios";
import "../styles/Auth.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", formData);
      alert(response.data.message);
    } catch (error) {
      console.error("Error during login:", error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="auth-container">
      <h1>Login</h1>
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
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
