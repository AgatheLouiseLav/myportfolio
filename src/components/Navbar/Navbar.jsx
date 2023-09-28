import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
	<div className='Navbar'>
    <ul>
      <Link to="/"><li>About</li></Link>
      <Link to="/projects"><li>Projects</li></Link>
      <Link to="/certificates"><li>Certifications</li></Link>
      <Link to="/contact"><li>Contact</li></Link>
    </ul>
  </div>
  )
}

export default Navbar