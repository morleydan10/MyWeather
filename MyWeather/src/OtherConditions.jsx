import React from "react";
import UVIcon from "./UVIcon";

// Icon Imports
import WeatherVane from '../src/assets/weather_sagittarius.svg';
import NA from '../src/assets/weather_sagittarius.svg';

function OtherConditions ({ location, isCelcius }){

    // UV Variable
    const UV = location.current.uv
    
    // Wind Direction variables (cardinal)
    const north = location.current.wind_dir === ('N');
    const south = location.current.wind_dir === ('S');
    const east = location.current.wind_dir === ('E');
    const west = location.current.wind_dir === ('W');

    // Wind Direction variables (ordinal)
    const northeast = location.current.wind_dir === ('NE'); 
    const southeast = location.current.wind_dir === ('SE');
    const southwest = location.current.wind_dir === ('SW');
    const northwest = location.current.wind_dir === ('NW');

    // Additional Directions
    const northByNorthwest = location.current.wind_dir === ('NNW');
    const northByNortheast = location.current.wind_dir === ('NNE');
    const southBySoutheast = location.current.wind_dir === ('SSE');
    const southBySouthwest = location.current.wind_dir === ('SSW');
    const westByNorthwest = location.current.wind_dir === ('WNW');
    const westBySouthwest = location.current.wind_dir === ('WSW');
    const eastByNortheast = location.current.wind_dir === ('ENE');
    const eastBySoutheast = location.current.wind_dir === ('ESE');

    // Rotates Weather Vane Icon according to location direction
    function rotateWeatherVane() {
        if (east) {
            return { transform: 'rotate(0deg)' }; // East
        } else if (eastBySoutheast) {
            return { transform: 'rotate(22.5deg)' }; // East by Southeast
        } else if (southeast) {
            return { transform: 'rotate(45deg)' }; // Southeast
        } else if (southBySoutheast) {
            return { transform: 'rotate(67.5deg)' }; // South by Southeast
        } else if (south) {
            return { transform: 'rotate(90deg)' }; // South
        } else if (southBySouthwest) {
            return { transform: 'rotate(112.5deg)' }; // South by Southwest
        } else if (southwest) {
            return { transform: 'rotate(135deg)' }; // Southwest
        } else if (westBySouthwest) {
            return { transform: 'rotate(157.5deg)' }; // South by Southwest
        } else if (west) {
            return { transform: 'rotate(180deg)' }; // West
        } else if (westByNorthwest) {
            return { transform: 'rotate(202.5deg)' }; // West by Northhwest
        } else if (northwest) {
            return { transform: 'rotate(225deg)' }; // Northwest
        } else if (northByNorthwest) {
            return { transform: 'rotate(247.5deg)' }; // North by Northwest
        } else if (north) {
            return { transform: 'rotate(270deg)' }; // North
        } else if (northByNortheast) {
            return { transform: 'rotate(292.5deg)' }; // North by Northeast
        } else if (northeast) {
            return { transform: 'rotate(315deg)' }; // Northeast
        } else if (eastByNortheast) {
            return { transform: 'rotate(337.5deg)' }; // East by Northeast
        } else {
            return console.log("I don't know");
        }
    }
    
    return (
        <div className="transparent-div">
            <div className="other-conditions-div">
                <div className="wind-div">
                    <img src={WeatherVane ? WeatherVane : NA} alt="Weather Vane" height="20px" width="20px" style={rotateWeatherVane()}/>
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