import React, { useState } from 'react';

const Ocultar = () => {
    const[ isVisible, setIsVisible ] = useState (false)
    const toggleVisibility =() => {
        alert("working")
        setIsVisible(!isVisible)
    }
    return (
        <div>
           <input type={isVisible ? "text" :'password'}></input> 
           <button onClick={toggleVisibility}>Mostrar</button>
        </div>
    );
};

export default Ocultar;