// CustomerSignup.js
import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import './CustomerSignup.css';

const CustomerSignup = () => {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    username: 'NewUser',
    password: 'password',
    confirmPassword: 'password',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send data to the server and handle signup logic here.

    // For the sake of example, simulate a successful signup and redirect to the dashboard
    // Replace this with your actual signup logic
    console.log('Signup form submitted:', formData);

    // Redirect to the customer dashboard after successful signup
    navigate('/customer-dashboard');
  };

  return (
    <div className="signup-container">
      <h2>Customer Signup</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default CustomerSignup;
