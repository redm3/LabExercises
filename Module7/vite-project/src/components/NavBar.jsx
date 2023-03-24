import React from 'react';
import { NavLink, Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className="NavBar">
            <ul className="menu">
                <li><NavLink to="/Home">Home</NavLink></li>
                <li><NavLink to="/">Dashboard</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/Posts">Posts</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar