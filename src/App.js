// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatePostPage from './pages/CreatePostPage';
import EditPostPage from './pages/EditPostPage';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import { posts, addPost } from './data/posts';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null); // State for currentUser

  const handleLogin = (email, password) => {
    // Simulate login with basic check
    if (email === 'test@example.com' && password === 'password') {
      setIsLoggedIn(true);
      setCurrentUser(email); // Set currentUser
    } else {
      alert('Invalid credentials');
    }
  };

  const handleSignup = (email, password) => {
    // Simulate signup with basic check
    setIsLoggedIn(true);
    setCurrentUser(email); // Set currentUser
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/create" element={<CreatePostPage addPost={addPost} />} />
        <Route path="/edit/:id" element={<EditPostPage />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup handleSignup={handleSignup} />} />
      </Routes>
    </Router>
  );
}

export default App;
