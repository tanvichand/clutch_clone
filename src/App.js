// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/components/Home';
import CompanyDashboard from '../src/components/CompanyDashboard';
import CompanyLogin from './components/CompanyLogin';
import CompanySignup from './components/CompanySignup';
import CustomerLogin from './components/CustomerLogin';
import CustomerSignup from './components/CustomerSignup';
import CustomerDashboard from '../src/components/CustomerDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer-login" element={<CustomerLogin />} />
        <Route path="/customer/signup" element= {<CustomerSignup/>}/>
        <Route path="/company-login" element={<CompanyLogin />} />
        <Route path="/company-signup" element={<CompanySignup />} />
        <Route path="/company-dashboard" element={<CompanyDashboard />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
