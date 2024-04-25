import React, { useState } from "react";

// Import SVG Assests/Icons
import Sunny from '../src/assets/sunny.svg'
import Cloudy from '../src/assets/cloudy.svg'
import PartlyCloudy from '../src/assets/cloudy-day-3.svg'
import Rainy from '../src/assets/rainy-6.svg'
import LightRain from '../src/assets/rainy-4.svg'
import Thunder from '../src/assets/thunder.svg'
import Snowy from '../src/assets/snowy-6.svg'
import LightSnow from '../src/assets/snowy-4.svg'
import PatchySnow from '../src/assets/snowy-3.svg'
import PatchyLightSnow from '../src/assets/snowy-2.svg'



function Card({ location, isCelcius }) {

    

    function currentCondition(){

        // Variables to help clean syntax
        const condition = location.current.condition.text.toLowerCase();
        const apiIcon = location.current.condition.icon

        // Types of conditions from weather API
        const partlyCloudy = condition.includes('partly') && condition.includes('cloudy')
        const cloudy = condition.includes('cloudy') || condition.includes('overcast')
        const sunny = condition.includes('sunny') || condition.includes('clear')
        const rainy = condition.includes('moderate') || condition.includes('heavy') && condition.includes('rain')
        const lightRain = condition.includes('light') && condition.includes('rain') || condition.includes('drizzle')
        const snowy = condition.includes('snow') && condition.includes('heavy') || condition.includes('moderate')
        const lightSnow = condition.includes('snow') && condition.includes('light') || condition.includes('partly')
        const patchySnow = condition.includes('snow') && condition.includes('heavy') || condition.includes('moderate') && condition.includes('patchy')
        const patchyLightSnow = condition.includes('snow') && condition.includes('light') || condition.includes('partly') && condition.includes('patchy')
        const thunder = condition.includes('thunder')

        // Conditional rendering of weather icons
        if (partlyCloudy){
            return PartlyCloudy;
        } else if (cloudy){
            return Cloudy;
        } else if (sunny){
            return Sunny;
        } else if (rainy){
            return Rainy;
        } else if (lightRain){
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
        }else return apiIcon
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
            </div>
        </div>
    )
}

export default Card;