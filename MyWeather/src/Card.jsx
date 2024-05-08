import React from "react";

// Import Other Components
import OtherConditions from "./OtherConditions";
import SunAndMoonSidebar from "./SunAndMoonSidebar";


// Import SVG Assests/Icons (Daytime)
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
import Fog from '../src/assets/fog.svg'
import Mist from '../src/assets/mist.svg'
import Haze from '../src/assets/haze-day.svg'
import Hail from '../src/assets/hail.svg'

// Import SVG Assests/Icons (Night)
import ClearNight from '../src/assets/starry-night.svg'
import FoggyNight from '../src/assets/fog-night.svg'
import OvercastNight from '../src/assets/overcast-night.svg'
import PartlyCloudyNight from '../src/assets/partly-cloudy-night.svg'
import LightRainyNight from '../src/assets/partly-cloudy-night-drizzle.svg'
import PatchyRainNight from '../src/assets/partly-cloudy-night-rain.svg'
import SnowyNight from '../src/assets/snow.svg'
import LightSnowyNight from '../src/assets/partly-cloudy-night-snow.svg'
import ThunderNight from '../src/assets/thunderstorms-night-rain.svg'


function Card({ location, isCelcius, day }) {

    

    function currentCondition(){

        // Variables to help clean syntax
        const condition = location.current.condition.text.toLowerCase();
        const apiIcon = location.current.condition.icon

        // Day Conditions
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
        const hail = condition.includes('hail')

        // Night conditions
        const clearNight = condition.includes('clear')
        const foggyNight = condition.includes('fog')
        const overcastNight = condition.includes('overcast')
        const partlyCloudyNight = condition.includes('partly') && condition.includes('cloudy')
        const lightRainyNight = condition.includes('light') && condition.includes('rain') || condition.includes('drizzle')
        const patchyRainNight = condition.includes('patchy') || condition.includes('partly') && condition.includes('rain') || condition.includes('drizzle')
        const snowyNight = condition.includes('snow') && condition.includes('heavy') || condition.includes('moderate')
        const lightSnowyNight = condition.includes('snow') && condition.includes('light') || condition.includes('partly')
        const thunderstormsNight = condition.includes('thunder')

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
            } else if (hail) {
                return Hail;
            } else {
                return apiIcon;
            }
        } else {
            // Nighttime icons
            if (clearNight) {
                return ClearNight;
            } else if (foggyNight) {
                return FoggyNight;
            } else if (overcastNight) {
                return OvercastNight;
            } else if (partlyCloudyNight) {
                return PartlyCloudyNight;
            } else if (lightRainyNight) {
                return LightRainyNight;
            } else if (snowyNight) {
                return SnowyNight;
            } else if (lightSnowyNight) {
                return LightSnowyNight;
            } else if (patchyRainNight) {
                return PatchyRainNight;
            } else if (thunderstormsNight) {
                return ThunderNight;
            } else if (misty) {
                return Mist;
            } else {
                return apiIcon;
            }
        }
    }

    return (
        <div className="weather-card">
                <div className="location-name-div">
                    <h2 className="city-name">{location.location.name},
                        {location.location.country.includes("United States")?
                        (
                            " " + location.location.region
                        ):(
                            " " + location.location.country
                        )}
                    </h2>
                </div>
                <div className="info-div">
                    <OtherConditions location={location} isCelcius={isCelcius} /> 
                    <div className="card-center-div">
                        <div className="temperature-container">
                            <img 
                                src={currentCondition()} 
                                alt='Weather Icon'
                                width="120px"
                                height="120px"
                                />
                            <h1 className='temperature'>{!isCelcius ? (location.current.feelslike_f + " °F"):(location.current.feelslike_c + "°C")}</h1>
                            <h3 className='feels-like'>Feels like: {!isCelcius ? (location.current.feelslike_f + " °F"):(location.current.feelslike_c + "°C")}</h3>
                            <h3 className="condition-text">{location.current.condition.text}</h3>
                        </div>
                    </div>
                    <SunAndMoonSidebar location={location} isCelcius={isCelcius} />
                </div>
        </div>
    )
}

export default Card;