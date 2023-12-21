import Register from './Register';
import Login from './Login';
import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
function App() {

  return (
    <Router>
    <Routes>
        {/* Define your routes using 'Route' components */}
    
        <Route path="/register" element={<Register />} />
        <Route exact path="/" element={<Login />} />
        {/* Add more routes as needed */}
    </Routes>
</Router>
  );
}

export default App;