import React from "react";

import ForecastConditionIcon from "./IconComponents/ForecastConditionIcon";

function HourlyTablet ({ hour, isCelcius, USTimeTable }){

    // API has date before the hour. This variable returns just the hour
    const hourPart = hour.time.substring(11, 16);

    // console.log(hour);

    // Renders 12-Hour Time
    function renderTime () {
        return USTimeTable[hourPart]
    }
    

    return(
        <div className="hour-tablet">
            <p className="tablet-text">{isCelcius? hourPart : renderTime() }</p>
            <ForecastConditionIcon hour={hour} />
            <p className="tablet-text">{isCelcius ? hour.temp_c + "°C" : hour.temp_f + "°F"}</p>
            <p className="tablet-text">{hour.chance_of_rain}%</p>
        </div>
    )
}

export default HourlyTablet;