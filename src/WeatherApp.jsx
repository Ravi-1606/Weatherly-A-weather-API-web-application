import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 5.77,
        humididty: 36,
        temp: 9.45,
        tempMax: 9.95,
        tempMin: 8.66,
        weather: "clear sky",
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);

    }
    return (
    <div style={{textAlign: "center"}}>
        <h2>Weather App by Ravi</h2>
        <SearchBox updateInfo = {updateInfo} />
        <InfoBox info={weatherInfo} />
    </div>
    );
}