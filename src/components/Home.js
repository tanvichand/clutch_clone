// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="login-section">
        <h2 className="heading">Login as Company</h2>
        <Link to="/company-login">
          <button className="company-login-button">Company Login</button>
        </Link>
      </div>

      <div className="login-section">
        <h2 className="heading">Login as Customer</h2>
        <Link to="/customer-login">
          <button className="customer-login-button">Customer Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
