import React from 'react';
import quotes from '../quotes.json'
import { useState } from 'react';

const Quotes = () => {
    const rdm = Math.floor(Math.random() * quotes.quotes.length)
    const [counter, setCounter] = useState(rdm)
    const increment = () => {
        const rdm = Math.floor(Math.random() * quotes.quotes.length)
        setCounter(rdm)
    }
    const colors = ['#641443', '#010c02','#1c0c0d','#6a96b0','#95eaec']
    const randomColor = Math.floor(Math.random() * colors.length)
    document.body.style = `background: ${colors[randomColor]}`
    return (
        <div className='quote' style={{color: colors[randomColor]}}>
            <h1>
                <i class="fa-solid fa-quote-left">
                </i>{quotes.quotes[counter].quote}
                <i class="fa-solid fa-quote-right"></i>
            </h1>
            <h2>{quotes.quotes[counter].author}</h2>

            <button className='center' onClick={increment}>
                <i class="fa-solid fa-angle-right"></i>
            </button>
        </div>
    );
};

export default Quotes;