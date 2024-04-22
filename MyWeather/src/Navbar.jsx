import React, { useState } from "react";
import Weather from '../src/assets/weather.svg'



export default function Navbar ({ apiKey }){

    const [locationQuery, setLocationQuery] = useState('')
    const [selectedLocation, setSelectedLocation] = useState(null)



    // const handleChange = (e) => e.target.value
    

    function searchLocation (e) {
        e.preventDefault();
        setLocationQuery(e.target.value);

        fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(locationQuery)}&key=${apiKey}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })

    }

    // usememoization to search for location from api



    return(
        <div className="navbar-div">
            <img className="weather-logo" src={Weather} alt="Weather Logo" />
            <h1 className="title">My Weather</h1>
            <input className="searchbar" value={locationQuery} onSubmit={searchLocation} placeholder="Search Location"></input>
        </div>
    )
}