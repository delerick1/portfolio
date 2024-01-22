import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useFeych from './hooks/useFeych';

//https://github.com/abourtnik/emojis-world

const Emoji = () => {
    const{ data: emoji , changeData: chngEmoji }= useFeych ('https://api.emojisworld.fr/v1/random',
    res => res.data.results[0]
    )



console.log(emoji)
    return (
        <div>
            <h1>{emoji.name}</h1>
            <h2>{emoji.emoji}</h2>
            <button onClick={chngEmoji}>{emoji.emoji}</button>
        </div>
    );
};

export default Emoji;