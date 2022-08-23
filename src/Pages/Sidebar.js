import React from "react";
import { Link } from 'react-router-dom';

export default function Sidebar(){

    return(
            <nav className="sidebar">
                <div className="sidebar-container">
                    <input type='checkbox' className='toggle-menu'></input>
                    <div className='hamburger'></div>
                    <ul className="sidebar_menu">
                        <li className="sidebar-item">
                            <Link to="/accueil" className="navbar__links">Home</Link>
                        </li>
                        <li className="sidebar-item">
                            <Link to="/profile" className="navbar__links">Profile</Link>
                        </li>
                    </ul>
                </div>   
            </nav>        
    )
}