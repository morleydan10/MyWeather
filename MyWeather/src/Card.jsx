import React from "react"
import Sunny from '../src/assets/sunny.svg'


export default function Card({ location }) {

    return (
        <div className="weather-card">
            <div className="upper-div">
                
                <span>This is the upper div</span>
                <h3 className="city-name">{location.location.name},{location.location.region}</h3>
                <h3 className="country">{location.location.country}</h3>
                <h2 className='temperature'>{location.current.temp_f}°F/{location.current.temp_c}°C</h2>
            </div>
            <div className="lower-div">
                <span>This is the lower div</span>
                <br/>

                <img src={Sunny} alt='Sunny Icon'/>
                
            </div>
        </div>
    )
}