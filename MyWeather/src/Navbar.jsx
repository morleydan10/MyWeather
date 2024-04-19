import React, { useState } from "react";
import Weather from '../src/assets/weather.svg'



export default function Navbar (){

    const handleChange = () => {
    }



    return(
        <div className="navbar-div">
            <img className="weather-logo" src={Weather} alt="Weather Logo" />
            <h1 className="title"> My Weather</h1>
            <input className="searchbar" onChange={handleChange} placeholder="Search your Location"></input>
        </div>
    )
}