import React from "react";

// Import SVG Assests/Icons
import Sunny from '../src/assets/clear-day.svg'
import Cloudy from '../src/assets/cloudy.svg'
import Overcast from '../src/assets/overcast.svg'
import PartlyCloudy from '../src/assets/partly-cloudy-day.svg'
import Rainy from '../src/assets/rain.svg'
import LightRain from '../src/assets/drizzle.svg'
import Thunder from '../src/assets/thunderstorms-day-rain.svg'
import Snowy from '../src/assets/snow.svg'
import LightSnow from '../src/assets/snow.svg'
import PatchySnow from '../src/assets/partly-cloudy-day-snow.svg'
import PatchyLightSnow from '../src/assets/partly-cloudy-day-snow.svg'
import WeatherVane from '../src/assets/weather_sagittarius.svg'
import ClearNight from '../src/assets/clear-night.svg'
import Fog from '../src/assets/fog.svg'
import Mist from '../src/assets/mist.svg'
import Haze from '../src/assets/haze-day.svg'


function Card({ location, isCelcius, day }) {

    

    function currentCondition(){

        // Variables to help clean syntax
        const condition = location.current.condition.text.toLowerCase();
        const apiIcon = location.current.condition.icon

        // Types of conditions from weather API
        const partlyCloudy = condition.includes('partly') && condition.includes('cloudy')
        const cloudy = condition.includes('cloudy')
        const overcast = condition.includes('overcast')
        const sunny =  condition.includes('sunny') || condition.includes('clear')
        const rainy = condition.includes('moderate') || condition.includes('heavy') && condition.includes('rain')
        const lightRain = condition.includes('light') && condition.includes('rain') || condition.includes('drizzle')
        const snowy = condition.includes('snow') && condition.includes('heavy') || condition.includes('moderate')
        const lightSnow = condition.includes('snow') && condition.includes('light') || condition.includes('partly')
        const patchySnow = condition.includes('snow') && condition.includes('heavy') || condition.includes('moderate') && condition.includes('patchy')
        const patchyLightSnow = condition.includes('snow') && condition.includes('light') || condition.includes('partly') && condition.includes('patchy')
        const thunder = condition.includes('thunder')
        const foggy = condition.includes('fog')
        const misty = condition.includes('mist')
        const hazy = condition.includes('haze') || condition.includes('hazy')

        // Night conditions
        const clearNight = condition.includes('clear')

        // Conditional rendering of weather icons
        if (day) {
            // Daytime Icons
            if (partlyCloudy) {
                return PartlyCloudy;
            } else if (cloudy) {
                return Cloudy;
            } else if (overcast) {
                return Overcast;
            } else if (sunny) {
                return Sunny;
            } else if (rainy) {
                return Rainy;
            } else if (lightRain) {
                return LightRain;
            } else if (thunder) {
                return Thunder;
            } else if (lightSnow) {
                return LightSnow;
            } else if (snowy) {
                return Snowy;
            } else if (patchySnow) {
                return PatchySnow;
            } else if (patchyLightSnow) {
                return PatchyLightSnow;    
            } else if (foggy) {
                return Fog;
            } else if (misty) {
                return Mist;
            } else if (hazy) {
                return Haze;
            } else {
                return apiIcon;
            }
        } else {
            // Nighttime icons
            if (clearNight) {
                return ClearNight;
            } else {
                return apiIcon;
            }
        }
    }

    return (
        <div className="weather-card">
            <div className="upper-div">
                <h2 className="city-name">{location.location.name},
                    {location.location.country.includes("United States")?
                    (
                        " " + location.location.region
                    ):(
                        " " + location.location.country
                    )}
                </h2>
            </div>
                <img 
                    src={currentCondition()} 
                    alt='Weather Icon'
                    width="120px"
                    height="120px"
                />
                <h1 className='temperature'>{!isCelcius ? (location.current.feelslike_f + " °F"):(location.current.feelslike_c + "°C")}</h1>
                <h3 className='feels-like'>Feels like: {!isCelcius ? (location.current.feelslike_f + " °F"):(location.current.feelslike_c + "°C")}</h3>
            <div className="lower-div">
                <h3 className="condition-text">{location.current.condition.text}</h3>
                <div className="other-conditions-div">
                    <div className="wind-div">
                        <img src={WeatherVane} alt="Weather Vane" height="20px" width="20px"/>
                        <p className="other-conditions-text">{!isCelcius? (location.current.wind_mph + " mph") : (location.current.wind_kph + " kph")}</p>
                        <p className="other-conditions-text">{location.current.wind_dir}</p>
                    </div>
                    <div className="humidity-div">
                        <h2 className="other-conditions-text">{location.current.humidity}%</h2>
                        <p className="other-conditions-text">Humidity</p>
                    </div>
                    <div className="uv-div">
                        <h2 className="other-conditions-text">{location.current.uv}</h2>
                        <p className="other-conditions-text">UV Index</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;