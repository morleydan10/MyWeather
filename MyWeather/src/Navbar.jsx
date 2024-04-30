import React, { useState, useEffect } from "react";
import Weather from '../src/assets/weather.svg'

export default function Navbar ({ weatherApiKey, getSearchedLocation }){

    const [locationQuery, setLocationQuery] = useState('');
    // const [placesService, setPlacesService] = useState(null);

    // useEffect(() => {
    //     // Load Google Maps Places Library
    //     const script = document.createElement('script');
    //     script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    //     script.onload = () => {
    //         // Initialize Places Service
    //         setPlacesService(new window.google.maps.places.PlacesService(document.createElement('div')));
    //     };
    //     document.body.appendChild(script);
    // }, [apiKey]);

    

    function searchLocation(e) {
        e.preventDefault();
        fetch(`http://api.weatherapi.com/v1/search.json?key=${weatherApiKey}&q=${locationQuery}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            renderLocations(data);
        })
        }
    
    function renderLocations(data){
        const results = data.map((place) => {
            return(
                <>
                    <ul>{place.name},{place.region}</ul>
                    <p>{place.country}</p>
                </>
            )

        })
    }

    return(
        <div className="navbar-div">
            <img className="weather-logo" src={Weather} alt="Weather Logo" />
            <h1 className="title">My Weather</h1>
            <input 
                className="searchbar" 
                value={locationQuery} 
                onChange={(e) => {
                    setLocationQuery(e.target.value)
                    // searchLocation(e)
                }} 
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        searchLocation(e);
                    }}}
                
                placeholder="Search Location" />
        </div>
    )
}
