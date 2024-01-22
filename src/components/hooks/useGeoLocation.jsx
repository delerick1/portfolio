import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useGeoLocation = () => {

    const [data, setData] = useState({});

useEffect (() =>{ 
    navigator.geolocation.getCurrentPosition(success);
    function success(pos) {
        const crd = pos.coords;

        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);  
        axios.get( `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&exclude={part}&appid=e5ca71015601b0130cf1ebd677fdd998`)
        .then(res => {
            res.data.main.temp = res.data.main.temp - 273.15
            setData(res.data)
        })
   } 
},[])
    return {data}
};

export default useGeoLocation;