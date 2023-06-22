import React from 'react';
import '../styles.css';
import memesData from '../memeData';

export default function Form() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMeme, setAllMeme] = React.useState(memesData)

    function handleMeme(e) {
        e.preventDefault();
        const memes = allMeme.data.memes;
        const random = Math.floor(Math.random() * memes.length);
        let url = memes[random].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: prevMeme = url
        }))
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

            <img src={meme.randomImage} className='image__render' alt='Meme gerado' />
        </main>
    )
};