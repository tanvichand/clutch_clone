// CustomerLogin.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CustomerLogin.css';


const CustomerLogin = () => {
  const [username, setUsername] = useState('customer');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Replace this with your actual authentication logic
    const isValidCustomer = checkCredentials(username, password);

    if (isValidCustomer) {
      // Redirect to the customer dashboard after successful login
      navigate('/customer-dashboard');
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  const checkCredentials = (enteredUsername, enteredPassword) => {
    // Replace this with your actual customer authentication logic
    const validUsername = 'customer';
    const validPassword = 'password';

    return enteredUsername === validUsername && enteredPassword === validPassword;
  };

  return (
    <div className="customer-login-container">
      <div className="customer-login-form">
        <h2>Login as Customer</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        {error && <p className="error-message">{error}</p>}

        <p>
          Don't have an account? <Link to="/customer/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default CustomerLogin;
