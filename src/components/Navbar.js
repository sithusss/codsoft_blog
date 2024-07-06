// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout functionality
    navigate('/login');
  };

  return (
    <nav>
      <Link to="/">Home</Link>
    
      <Link to="/create">Create Post</Link>
      <button onClick={handleLogout}>Logout</button>
       
    </nav>
  );
};

export default Navbar;
