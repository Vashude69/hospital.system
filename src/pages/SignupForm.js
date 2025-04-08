// frontend/src/components/SignupForm.js
import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    aadhaar: '',
    role: 'patient'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', form);
      alert(res.data.message);
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required /><br/>
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required /><br/>
      <input name="aadhaar" placeholder="Aadhaar No." onChange={handleChange} required /><br/>
      <select name="role" onChange={handleChange}>
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
      </select><br/>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
