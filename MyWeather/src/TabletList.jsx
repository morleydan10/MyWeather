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
            showHourlyForecast={showHourlyForecast}
            />
        ))
        
        function showHourlyForecast() {
            const forecast = hourlyTablets.filter(hourlyTablet => {
                const hour = hourlyTablet.props.hour.substring(11, 16);
                return hour >= localTime;
            });
    
            return future;
        }
    
    return(
        <div className="tablet-container">
            {showHourlyForecast()}
        </div>
    )

}

export default TabletList;