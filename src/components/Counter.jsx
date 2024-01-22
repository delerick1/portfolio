import React from 'react';
import { useState } from 'react'


const Counter = () => {
    const [counter, setCounter] = useState(0)
    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }
    const erase = () => {
        setCounter(0)
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={erase}>0</button>

        </div>
    );
};

export default Counter;