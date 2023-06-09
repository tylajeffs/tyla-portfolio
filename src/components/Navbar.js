import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Toggle from "./Toggle";
import '../css/nav.css';

function Navbar() {
  return (
    <nav className="navbar">
        <div className="toggle">
            <Toggle />
        </div>
        <div className="nav-container">
            <div className="nav-elements">
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/projects">Projects</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
            </ul>

            </div>
        </div> 
    </nav>
  );
}

export default Navbar;