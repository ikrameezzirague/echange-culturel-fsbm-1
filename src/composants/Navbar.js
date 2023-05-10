import React from 'react';
import './Navbar.css';
import logo from './logo.jpg';

function Navbar() {
  return (
    <div className="Navbar">
      <ul className="menu">
        <li><a href="/CV-thèque">CV-thèque</a></li>
        <li><a href="/FAQ">FAQ</a></li>
        <li><a href="/events">évènements</a></li>
        <li><a href="/Login"><button className="login-btn">Login</button></a></li>
        <li><a href="/SignUp"><button className="signup-btn">Sign-up</button></a></li>
      </ul>
    </div>
    
  );
}

export default Navbar;