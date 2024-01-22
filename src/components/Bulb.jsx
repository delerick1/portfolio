import React from 'react';
import { useState } from 'react';

const Bulb = ({toggleIsOn, color}) => {



    return (
        <div>
            <div className ="circle" style={{background: color ? "yellow" : "gray"}}>
            </div>
            <button onClick={toggleIsOn}>onn</button>
        </div>
    );
};

export default Bulb;