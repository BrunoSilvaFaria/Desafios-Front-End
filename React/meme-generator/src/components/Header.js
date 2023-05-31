import React from 'react';
import '../styles.css';
import logoHeader from '../assets/trollFace.svg'

export default function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <img className='logo__img' src={logoHeader} alt='Troll Face'/>
                <h1 className='logo__text'>
                Meme Generator
                </h1>
            </div>

            <p className='header__text'>
            React Course - Project 3
            </p>
        </header>
    )
};