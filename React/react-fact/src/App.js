import React from 'react';
import './styles.css';
import Header from './Components/Header';
import MainContent from './Components/MainContent';

export default function App() {
    return (
        <div className='conteiner'>
            <Header />
            <MainContent />
        </div>
    )
}
