import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css"
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/homepage" className="navbar-logo">
          Entrance+
        </Link>
        <ul className="navbar-links">
          <li className="navbar-item">
            <Link to="/categories" className="navbar-link">
              Profile
            </Link>
          </li>
          {/* <li className="navbar-item">
            <Link to="/courses" className="navbar-link">
               
            </Link>
          </li> */}
          <li className="navbar-item">
            <Link to="/teachers" className="navbar-link">
              Teachers
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
