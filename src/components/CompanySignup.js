// CompanySignup.js
import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import './CompanySignup.css';

const CompanySignup = () => {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    companyName: 'NewCompany',
    password: 'password',
    confirmPassword: 'password',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Company Signup form submitted:', formData);

    // Redirect to the company dashboard after successful signup
    navigate('/company-dashboard');
  };

  return (
    <div className="signup-container">
      <h2>Company Signup</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
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

export default CompanySignup;
