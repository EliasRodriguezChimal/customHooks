import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand"> useContext </a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink exact="true" className="nav-link" to="/"> Home </NavLink>
                    <NavLink exact="true" className="nav-link" to="/about"> About </NavLink>
                    <NavLink exact="true" className="nav-link" to="/login"> Login </NavLink>
                </div>
            </div>
        </nav>
    )
}
