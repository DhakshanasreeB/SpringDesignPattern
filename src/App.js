// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/signup';
import Profile from './pages/profile';
import AdminDashboard from './pages/AdminDashboard';
import Property from './pages/property';
import Buy from './pages/Buy';
import Sell from './pages/sell';
import Rent from './components/rent';
import PropertyDetails from './pages/PropertyDetails';
import ProtectedRoute from './components/ProtectedRoute'; // Example path, adjust accordingly

import Navbar from './pages/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute adminOnly={true}><AdminDashboard /></ProtectedRoute>} />
        <Route path="/property" element={<Property />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </>
  );
}

export default App;
