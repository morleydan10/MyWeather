import React from "react";
import MoonIcon from "../src/IconComponents/MoonIcon";

// Icon Imports
import Sunrise from '../src/assets/sunrise.svg';
import Sunset from '../src/assets/sunset.svg';

function SunAndMoonSidebar ({ location, isCelcius}){

    // Variables to clean syntax
    const sunrise = location.forecast.forecastday[0].astro.sunrise;
    const sunset = location.forecast.forecastday[0].astro.sunset;
    const moonphase = location.forecast.forecastday[0].astro.moon_phase;

    // Convert 12-hour time from API to 24-hour time
    const twentyFourHour = {
        '01': '13',
        '02': '14',
        '03': '15',
        '04': '16',
        '05': '17',
        '06': '18',
        '07': '19',
        '08': '20',
        '09': '21',
        '10': '22',
        '11': '23',
        '12': '00',  // Midnight
    };

    // Function to adjust the time to 24-hour format
    function adjustTime(time) {
        const hour = time.substring(0, 2); // Extract the first two characters representing the hour
        const newHour = twentyFourHour[hour]; // Convert to 24-hour format
        const adjustedTime = newHour + time.substring(2, 5);
        return adjustedTime; // Concatenate the new hour with the rest of the time string
    }

    // Determine if it's afternoon or evening (PM)
    const isAfternoonEvening = sunset.toLowerCase().includes("pm");

    // Adjust sunrise
    const adjustedSunrise = sunrise.substring(0,5);

    // Adjust sunset time 
    const adjustedSunset = isAfternoonEvening ? adjustTime(sunset) : sunset;

    return (
        <div className="transparent-div-2">
            <div className="other-conditions-div-2">
                <div className="sunrise-div">
                    <img src={Sunrise} alt="Sunrise" height="64px" width="64px"/>
                    <p className="other-conditions-text">{isCelcius ? adjustedSunrise :sunrise}</p>
                    <p className="other-conditions-text">Sunrise</p>
                </div>
                <div className="sunset-div">
                    <img src={Sunset} alt="Sunset" height="64px" width="64px"/>
                    <p className="other-conditions-text">{isCelcius ? adjustedSunset : sunset}</p>
                    <p className="other-conditions-text">Sunset</p>
                </div>
                <div className="moonphase-div">
                    <MoonIcon location={location} moonphase={moonphase} />
                    <p id="moonphase-text" className="other-conditions-text">{moonphase}</p>
                </div>
            </div>
        </div>
    )
}

export default SunAndMoonSidebar;