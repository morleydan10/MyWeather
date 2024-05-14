import React from "react";

import HourlyTablet from "./HourlyTablet";

function TabletList ({ location, isCelcius }){

    const hours = location.forecast.forecastday[0].hour

    const localTime = location.location.localtime.substring(11, 16);

    
    const hourlyTablets = 
    hours.map((hour, i) => 
        (<HourlyTablet
            key={i}
            hour={hour}
            isCelcius={isCelcius}
            location ={location}
            />
        ))
        
    // Array that show the number up to five hours 
    // const hoursView = []
        
    // function showHourlyForecast() {
    //     const forecast = hourlyTablets.filter(hourlyTablet => {
    //         const hour = hourlyTablet.props.hour.time.substring(11,16);
    //         return hour > localTime;
    //     });

    //     console.log(forecast);
    //     hoursView.push(...forecast.slice(0, 5));
    //     console.log(hoursView);
    //     return hoursView;
    // }

    
    return(
        <div className="tablet-container">
            {hourlyTablets}
        </div>
    )

}

export default TabletList;