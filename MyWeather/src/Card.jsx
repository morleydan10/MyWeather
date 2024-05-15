import React from "react";

// Import Other Components
import CurrentConditionIcon from "./IconComponents/CurrentConditionIcon";
import OtherConditions from "./OtherConditions";
import SunAndMoonSidebar from "./SunAndMoonSidebar";
import Carousel from "./Carousel";

function Card({ location, isCelcius, day }) {

    // const localTime = location.location.localtime.substring(11, 16);
    
    // API uses 24 hour time table.  This converts 24 hour to 12 hour for users in the United States.
    const USTimeTable = {
        '00:00': '12 AM',
        '01:00': '1 AM',
        '02:00': '2 AM',
        '03:00': '3 AM',
        '04:00': '4 AM',
        '05:00': '5 AM',
        '06:00': '6 AM',
        '07:00': '7 AM',
        '08:00': '8 AM',
        '09:00': '9 AM',
        '10:00': '10 AM',
        '11:00': '11 AM',
        '12:00': '12 PM',
        '13:00': '1 PM',
        '14:00': '2 PM',
        '15:00': '3 PM',
        '16:00': '4 PM',
        '17:00': '5 PM',
        '18:00': '6 PM',
        '19:00': '7 PM',
        '20:00': '8 PM',
        '21:00': '9 PM',
        '22:00': '10 PM',
        '23:00': '11 PM'
    };

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
                    <SunAndMoonSidebar location={location} isCelcius={isCelcius} USTimeTable={USTimeTable} />
                </div>
                <Carousel location={location} isCelcius={isCelcius} USTimeTable={USTimeTable}/>
        </div>
    )
}

export default Card;