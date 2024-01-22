import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Pokemon = () => {
    const rdm = Math.floor(Math.random() * 600)+1
    const [pokemon, setPokemon] = useState({})
    const [isDecimeters, setIsDecimetros] = useState(true)
    const [isHectograms, setIsHectograms] = useState(true)

 
 
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${rdm}`)
            .then(res => setPokemon(res.data))
    }, [])
   
    const changeUnits = () => {
        setIsDecimetros(!isDecimeters);
        setIsHectograms(!isHectograms)
    }
    const changePokemon = () => {
        const rdm = Math.floor(Math.random() * 600)+1
        axios.get(`https://pokeapi.co/api/v2/pokemon/${rdm}`)
            .then(res => setPokemon(res.data))
    }
    console.log(pokemon)



    return (
        <div>
            <h1>Pokemon</h1>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites?.other["official-artwork"].front_default}></img>
            <ul>
                <li>Weigth 
                    {isHectograms ? pokemon.weight : pokemon.weight / 10}
                    {isHectograms ? 'hectograms' : 'kilograms'}</li>
                <li>Height 
                    {isDecimeters ? pokemon.height : pokemon.height / 10}
                    {isDecimeters ? 'decimetros' : 'meters'} </li>
                <li>Type 
                    {pokemon.types?.[0].type.name} </li>
                <button onClick={changeUnits}>Change Units</button>
                <button onClick={changePokemon}>Change Pokemon</button>

            </ul>

        </div>
    );
};

export default Pokemon;