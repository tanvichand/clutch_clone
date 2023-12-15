// CompanyLogin.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../components/CompanyLogin.css';

const CompanyLogin = () => {
  const [companyName, setCompanyName] = useState('Company');
  const [password, setPassword] = useState('Password');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Replace this with your actual authentication logic
    const isValidCompany = checkCredentials(companyName, password);

    if (isValidCompany) {
      // Redirect to the company dashboard after successful login
      navigate('/company-dashboard');
    } else {
      setError('Invalid company name or password. Please try again.');
    }
  };

  const checkCredentials = (enteredCompanyName, enteredPassword) => {
    // Replace this with your actual company authentication logic
    const validCompanyName = 'Company';
    const validPassword = 'Password';

    return (
      enteredCompanyName === validCompanyName && enteredPassword === validPassword
    );
  };

  return (
    <div className="company-login-container">
      <div className="company-login-form">
        <h2>Login as Company</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
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
          Don't have an account? <Link to="/company-signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default CompanyLogin;
