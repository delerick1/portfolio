import useGeoLocation from './hooks/useGeoLocation';


const WeatherApp = () => {
    const {data: weather} = useGeoLocation({});





    return (
        <div>
            <h1>Weather App</h1>
            <div>
            <h4><i class="fa-solid fa-location-crosshairs"></i>{weather.name} {weather.sys?.country}</h4>
                <h2>{weather.main.temp}</h2>
                
            </div>
        </div>
    );
};

export default WeatherApp;
