import React, { useState, useEffect } from "react";
import Weather from '../src/assets/weather.svg'

export default function Navbar ({ apiKey, getSearchedLocation }){

    const [locationQuery, setLocationQuery] = useState('');
    const [placesService, setPlacesService] = useState(null);
    const [searchedLocation, setSearchedLocation] = useState('');

    useEffect(() => {
        // Load Google Maps Places Library
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
        script.onload = () => {
            // Initialize Places Service
            setPlacesService(new window.google.maps.places.PlacesService(document.createElement('div')));
        };
        document.body.appendChild(script);
    }, [apiKey]);

    function searchLocation(e) {
        e.preventDefault();
        if (!placesService) return; // Wait for Places Service to be initialized

        const request = {
            query: locationQuery,
            fields: ['formatted_address', 'name', 'rating', 'opening_hours', 'geometry']
        };

        placesService.findPlaceFromQuery(request, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                console.log(results);
                setSearchedLocation(results[0].name);
                console.log(searchedLocation);
                getSearchedLocation(searchedLocation);
                // Handle results
            } else {
                console.error('Error fetching places:', status);
            }
        });
    }

    return(
        <div className="navbar-div">
            <img className="weather-logo" src={Weather} alt="Weather Logo" />
            <h1 className="title">My Weather</h1>
            <input 
                className="searchbar" 
                value={locationQuery} 
                onChange={(e) => setLocationQuery(e.target.value)} 
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        searchLocation(e);
                    }
                }}
                placeholder="Search Location" />
        </div>
    )
}
