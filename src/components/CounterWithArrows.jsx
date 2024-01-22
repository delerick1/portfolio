import React, { useState } from 'react';
import useCounter from './hooks/useCounter';

const CounterWithArrows = () => {
   const {counter, increment, decrement} = useCounter()

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={increment}><i class="fa-solid fa-arrow-left"></i></button>
            <button onClick={decrement}><i class="fa-solid fa-arrow-right"></i></button>

        </div>
    );
};

export default CounterWithArrows;