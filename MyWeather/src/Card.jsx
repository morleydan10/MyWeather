import React from "react"
import Sunny from '../src/assets/sunny.svg'
import Cloudy from '../src/assets/cloudy.svg'
import PartlyCloudy from '../src/assets/cloudy-day-3.svg'
import Rainy from '../src/assets/rainy-6.svg'
import LightRain from '../src/assets/rainy-4.svg'


export default function Card({ location }) {

    function currentCondition(){
        const condition = location.current.condition.text.toLowerCase();

        // Types of conditions
        const partlyCloudy = condition.includes('partly') && condition.includes('cloudy')
        const cloudy = condition.includes('cloudy')
        const sunny = condition.includes('sunny') || condition.includes('clear')
        const rainy = condition.includes('moderate') || condition.includes('heavy') && condition.includes('rain')
        const lightRain = condition.includes('light') && condition.includes('rain') || condition.includes('drizzle')

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
        }
    }

    return (
        <div className="weather-card">
            <div className="upper-div">
                <h2 className="city-name">{location.location.name}, {location.location.region}</h2>
                {/* <h3 className="country">{location.location.country}</h3> */}
            </div>
                <h1 className='temperature'>{location.current.temp_f}°F/{location.current.temp_c}°C</h1>
                <h3 className='feels-like'>Feels like: {location.current.feelslike_f}°F/{location.current.feelslike_c}°C</h3>
            <div className="lower-div">
                <img 
                    src={currentCondition()}
                    // src={location.current.condition.icon} 
                    alt='Weather Icon'
                />
            </div>
        </div>
    )
}