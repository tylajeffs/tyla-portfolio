import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import '../css/nav.css';

function Navbar() {
  return (
    <nav className="navbar">
        <div className="toggle">
            <DarkModeToggle />
        </div>
        <div className="nav-container">
            <div className="nav-elements">
            <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="/#project-section">Projects</a> 
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="https://github.com/tylajeffs" target="_blank" rel="noreferrer noopener">Github</Link>
                </li>
            </ul>

            </div>
        </div> 
    </nav>
  );
}

export default Navbar;