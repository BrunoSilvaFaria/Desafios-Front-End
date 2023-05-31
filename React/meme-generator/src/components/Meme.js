import React, { createElement } from 'react';
import '../styles.css';
import memesData from '../memeData';

export default function Form() {
    const memes = memesData.data.memes;
    const random = Math.floor(Math.random() * memes.length);
    let url

    const [memeImage, setMemeImage] = React.useState("");
    
    function handleMeme(e) {
        e.preventDefault();
        url = memes[random].url;
        setMemeImage(url)
    }

    return (
        <main>
            <form className='form'>
                <div className='inputs'>
                    <input type='text' className='input' />
                    <input type='text' className='input' />
                </div>

                <button type='submit' className='button' onClick={handleMeme}>
                    Get a new meme image  🖼
                </button>
            </form >

            <img src={memeImage} className='image__render' alt='Meme gerado' />
        </main>
    )
};