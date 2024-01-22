import React from 'react';
import { useState } from 'react';

const Statechange = () => {
    const [phrase, setPhrase] = useState("nombre")
    const changePhrase = () => {
        if(phrase === 'nombre'){
      setPhrase( "erick") 
    } else{
        setPhrase('nombre')
    }
 }
    return (
        <div>
            <h1>{phrase}</h1>
            <button onClick={changePhrase}>change</button>
        </div>
    );
};

export default Statechange;