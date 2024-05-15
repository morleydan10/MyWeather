import React, { useState } from "react";

// Icon imports
import Weather from '../src/assets/weather.svg'

// Component imports
import SearchResultsList from "./SearchResultsList";

function Navbar ({ weatherApiKey, getSearchedLocation }){

    // State Variables
    const [input, setInput] = useState("");
    const [results, setResults] = useState("");

    // Handles fetch from searchbar input
    function searchLocation(inputValue) {
        fetch(`http://api.weatherapi.com/v1/search.json?key=${weatherApiKey}&q=${inputValue}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setResults(data);
        })
        }
    
    // Handles change in searchbar input 
    function handleChange(inputValue){
        setInput(inputValue);
        searchLocation(inputValue);
    }

    return(
        <div className="navbar-div">
            <img className="weather-logo" src={Weather} alt="Weather Logo" />
            <h1 className="title">MyWeather</h1>
            <div className="search-div">
                <input 
                    className="searchbar" 
                    value={input} 
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder="Search Location" 
                />
                {results && results.length > 0 && input && <SearchResultsList results={results} getSearchedLocation={getSearchedLocation} setInput={setInput} />}
            </div>


        </div>
    )
}

export default Navbar;