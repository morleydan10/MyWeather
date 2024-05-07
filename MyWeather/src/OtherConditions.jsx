import React from "react";
import UVIcon from "./UVIcon";

import WeatherVane from '../src/assets/weather_sagittarius.svg'

function OtherConditions ({ location, isCelcius }){

    // UV Variable
    const UV = location.current.uv

    return (
        <div className="transparent-div">
            <div className="other-conditions-div">
                <div className="wind-div">
                    <img src={WeatherVane} alt="Weather Vane" height="20px" width="20px"/>
                    <p className="other-conditions-text">{!isCelcius? (location.current.wind_mph + " mph") : (location.current.wind_kph + " kph")}</p>
                    <p className="other-conditions-text">{location.current.wind_dir}</p>
                </div>
                <div className="humidity-div">
                    <h2 className="other-conditions-text">{location.current.humidity}%</h2>
                    <p className="other-conditions-text">Humidity</p>
                </div>
                <div className="uv-div">
                    <UVIcon UV={UV} />
                    <p className="other-conditions-text">UV Index</p>
                </div>
            </div>
        </div>
    )

}

export default OtherConditions;