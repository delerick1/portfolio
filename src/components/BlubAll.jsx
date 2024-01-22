import React from 'react';
import { useState } from 'react';
import Bulb from './Bulb';

const BlubAll = () => {const [color, setColor] = useState(false)
    const toggleIsOn = () => setColor(!color)
    return (
        <div>
            <Bulb color={color} toggleIsOn={toggleIsOn} />
            <Bulb color={color} toggleIsOn={toggleIsOn} />
            <Bulb color={color} toggleIsOn={toggleIsOn} />
            <Bulb color={color} toggleIsOn={toggleIsOn} />
        </div>)
};

export default BlubAll;