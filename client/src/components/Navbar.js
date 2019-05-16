import React from 'react';
import "../styles/Navbar.css";

function Navbar(){
    return  (
        <div className="navbar">
        <ul className="nav nav-tabs">
        <li className="nav-item">
            <a className="nav-link" href="/home">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/search">Property Search</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/cma">CMA</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/message">Message Board</a>
        </li>
        </ul>
        </div>
    );
}

export default Navbar;