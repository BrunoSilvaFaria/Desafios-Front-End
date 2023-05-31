import React from 'react';
import '../styles.css';
import logo from '../assets/logo-header.svg'

export default function Nav(){
    return (
        <>
        <header className='header'>
            <img src={logo} className='header__logo'/>
            <h3 className='header__title'>my travel journal.</h3>
        </header>
        </>
    );
}