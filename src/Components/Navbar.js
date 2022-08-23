import React from "react";
import { Link } from 'react-router-dom'
 
export default function Navbar(){
    return(
        <header>
            <nav className="navbar">
                <div className="navbar_container">
                    <Link to="/mymovies/" id='navbar__logo'>Mymovies</Link>
                    <ul className="navbar__menu">
                        <li className="navbar__item">
                            <Link to="/mymovies/" className="navbar__links">LOGIN</Link>
                        </li>
                        <li className="navbar__item">
                            <Link to="/signup" className="navbar__links">SIGN UP</Link>
                        </li>
                    </ul>
                </div>    
            </nav>
        </header>
    )
}