import React, { useState } from 'react';
import './Signup.css'; // Import the CSS file
import Login from './Login';
import axios from 'axios'
function Signup () {

 const [name, setName] = useState()
 const [email, setEmail] = useState()
 const [password, setPassword] = useState()
 const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', {name, email,password})
    .then(result => console.log(result))
    .catch(err => console.log(err))

  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="johndoe@example.com"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
          <p>
            Already have an account? <a href="/Login">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
