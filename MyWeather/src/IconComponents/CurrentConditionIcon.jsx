import React from "react";

// Import SVG Assests/Icons (Daytime)
import Sunny from '../assets/clear-day.svg';
import Cloudy from '../assets/cloudy.svg';
import Overcast from '../assets/overcast.svg';
import PartlyCloudy from '../assets/partly-cloudy-day.svg';
import Rainy from '../assets/rain.svg';
import LightRain from '../assets/drizzle.svg';
import Thunder from '../assets/thunderstorms-day-rain.svg';
import Snowy from '../assets/snow.svg';
import LightSnow from '../assets/snow.svg';
import PatchySnow from '../assets/partly-cloudy-day-snow.svg';
import PatchyLightSnow from '../assets/partly-cloudy-day-snow.svg';
import Fog from '../assets/fog.svg';
import Mist from '../assets/mist.svg';
import Haze from '../assets/haze-day.svg';
import Hail from '../assets/hail.svg';

// Import SVG Assests/Icons (Night)
import ClearNight from '../assets/starry-night.svg';
import FoggyNight from '../assets/fog-night.svg';
import OvercastNight from '../assets/overcast-night.svg';
import PartlyCloudyNight from '../assets/partly-cloudy-night.svg';
import LightRainyNight from '../assets/partly-cloudy-night-drizzle.svg';
import PatchyRainNight from '../assets/partly-cloudy-night-rain.svg';
import SnowyNight from '../assets/snow.svg';
import LightSnowyNight from '../assets/partly-cloudy-night-snow.svg';
import ThunderNight from '../assets/thunderstorms-night-rain.svg';

function CurrentConditionIcon({ location, day }) {

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
        const overcastNight = condition.includes('overcast') || condition.includes('cloudy')
        const partlyCloudyNight = condition.includes('partly') && condition.includes('cloudy')
        const lightRainyNight = condition.includes('light') && condition.includes('rain') || condition.includes('drizzle')
        const patchyRainNight = condition.includes('patchy') || condition.includes('partly') && condition.includes('rain') || condition.includes('drizzle')
        const rainyNight = condition.includes('moderate') || condition.includes('heavy') && condition.includes('rain')
        const snowyNight = condition.includes('snow') && condition.includes('heavy') || condition.includes('moderate')
        const lightSnowyNight = condition.includes('snow') && condition.includes('light') || condition.includes('partly')
        const thunderstormsNight = condition.includes('moderate') || condition.includes('heavy') && condition.includes('rain') && condition.includes('thunder')

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
            } else if (rainyNight) {
                return Rainy;
            }else if (snowyNight) {
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
    };

    return (
        <img 
            src={currentCondition()} 
            alt='Weather Icon'
            width="120px"
            height="120px"
            />
    )

}

export default CurrentConditionIcon;