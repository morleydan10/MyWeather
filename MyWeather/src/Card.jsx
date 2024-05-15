import React from "react";

// Import Other Components
import CurrentConditionIcon from "./IconComponents/CurrentConditionIcon";
import OtherConditions from "./OtherConditions";
import SunAndMoonSidebar from "./SunAndMoonSidebar";
import Carousel from "./Carousel";

function Card({ location, isCelcius, day }) {


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
                            <CurrentConditionIcon location={location} day={day} />
                            <h1 className='temperature'>{!isCelcius ? (location.current.temp_f + " °F"):(location.current.temp_c + "°C")}</h1>
                            <h3 className='feels-like'>Feels like: {!isCelcius ? (location.current.feelslike_f + " °F"):(location.current.feelslike_c + "°C")}</h3>
                            <h3 className="condition-text">{location.current.condition.text}</h3>
                        </div>
                    </div>
                    <SunAndMoonSidebar location={location} isCelcius={isCelcius} />
                </div>
                <Carousel location={location} isCelcius={isCelcius}/>
        </div>
    )
}

export default Card;