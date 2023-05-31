import React from "react";
import '../styles.css';
import logo from '../assets/logo.svg';

export default function NavBar() {
    return (
        <nav className="nav">
            <img src={logo} alt='Logo do site' className="icon__logo"/>
        </nav>
    )
};