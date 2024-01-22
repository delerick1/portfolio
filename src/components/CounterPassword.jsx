import React, { useEffect, useState } from 'react';

const CounterPassword = () => {
    const [counter, setCounter] = useState(0)
   
    const[ isVisible, setIsVisible ] = useState (false)


    useEffect(() => { const colors = ['#641443', '#010c02','#1c0c0d','#6a96b0','#95eaec']
    const randomColor = Math.floor(Math.random() * colors.length)
    document.body.style = `background: ${colors[randomColor]}`
console.log("adentro")
    }, [isVisible,setIsVisible])
   
    
    console.log("me cambie")
    return (
        <div>
            <h1>Contador</h1>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter + 1)}>+</button>   
            <button onClick={() => setCounter(0)}>0</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>


            <hr />
            <h2>Input Contrasena</h2>
            <input type={isVisible ? "text" :'password'}></input> 
           <button onClick={() => setIsVisible (!isVisible)}>Mostrar</button>
 
        </div>
    );
};

export default CounterPassword;