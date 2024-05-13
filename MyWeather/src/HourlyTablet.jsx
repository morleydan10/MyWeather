import React from "react";

function HourlyTablet ({ hour, isCelcius, showHourlyForecast }){

    // API has date before the hour. This variable returns just the hour
    const hourPart = hour.time.substring(11, 16);

    // console.log(isCelcius);

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

    function renderTime () {
        return USTimeTable[hourPart]
    }
    

    return(
        <div className="hour-tablet">
            <p>{isCelcius? renderTime() : hourPart }</p>
        </div>
    )
}

export default HourlyTablet;