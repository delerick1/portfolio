import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useFeych from './hooks/useFeych';

const ChuckNorris = () => {
    const { data: joke, changeData } = useFeych(
        'https://api.chucknorris.io/jokes/random',
        res => res.data
    );

    console.log(joke)



    return (
        <div>
            <h1>Chuck Norris Jokes</h1>
            <p>{joke.value}</p>
            <button onClick={changeData}>change</button>
        </div>
    );
};

export default ChuckNorris;