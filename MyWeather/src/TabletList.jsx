import React from "react";

import HourlyTablet from "./HourlyTablet";

function TabletList ({ location, isCelcius, USTimeTable }){

    const hours = location.forecast.forecastday[0].hour
    
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