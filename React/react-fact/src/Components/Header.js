import React from 'react';
import '../styles.css';
import logo from '../logo.svg';
export default function Header() {
    return (
        <header>
            <nav className='nav'>
                <a href='#'>
                    <img src={logo} className='nav__logo' />
                </a>
                <h3 className='nav__title'>React Facts</h3>

                <h4 className='nav__text'>React Course - Project 1</h4>
            </nav>
        </header>
    )
}