import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import SignupForm from "./pages/SignupForm"; // Updated import path

function App() {
  return (
    <Router>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/signup">Signup</a> {/* Added Signup link */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignupForm />} /> {/* Added Signup route */}
      </Routes>
    </Router>
  );
}

export default App;
