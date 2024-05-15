import React from "react";

// Components
import HourlyTablet from "./HourlyTablet";

function TabletList ({ location, isCelcius, USTimeTable }){

    // Variable to clean code
    const hours = location.forecast.forecastday[0].hour
    
    // Create tablets for each hour of forecast
    const hourlyTablets = 
    hours.map((hour, i) => 
        (<HourlyTablet
            key={i}
            hour={hour}
            isCelcius={isCelcius}
            location ={location}
            USTimeTable={USTimeTable}
            />
        ))

    
    return(
        <div className="tablet-container">
            {hourlyTablets}
        </div>
    )

}

export default TabletList;