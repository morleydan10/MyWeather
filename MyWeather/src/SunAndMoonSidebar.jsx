import React from "react";

// Icon Imports
import Sunrise from '../src/assets/sunrise.svg';
import Sunset from '../src/assets/sunset.svg';

function SunAndMoonSidebar ({ location, isCelcius }){

    // Variables to clean syntax
    const sunrise = location.forecast.forecastday[0].astro.sunrise;
    const sunset = location.forecast.forecastday[0].astro.sunset;
    const moonphase = location.forecast.forecastday[0].astro.moon_phase;
    
    return (
        <div className="transparent-div-2">
            <div className="other-conditions-div-2">
                <div className="sunrise-div">
                    <img src={Sunrise} alt="Sunrise" height="20px" width="20px"/>
                    <p className="other-conditions-text">{sunrise}</p>
                    <p className="other-conditions-text">Sunrise</p>
                </div>
                <div className="sunset-div">
                    <img src={Sunset} alt="Sunset" height="20px" width="20px"/>
                    <p className="other-conditions-text">{sunset}</p>
                    <p className="other-conditions-text">Sunset</p>
                </div>
                <div className="moonphase-div">
                    <p className="other-conditions-text">{moonphase}</p>
                </div>
            </div>
        </div>
    )

}

export default SunAndMoonSidebar;