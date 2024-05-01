import React, { useState } from "react";
import Weather from '../src/assets/weather.svg'
import SearchResultsList from "./SearchResultsList";

export default function Navbar ({ weatherApiKey, getSearchedLocation }){

    const [input, setInput] = useState("");
    // const [selectedLocation, setSelectedLocation]= useState(null);
    const [results, setResults] = useState("");

    function searchLocation(inputValue) {
        // e.preventDefault();
        fetch(`http://api.weatherapi.com/v1/search.json?key=${weatherApiKey}&q=${inputValue}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setResults(data);
        })
        }

    function handleChange(inputValue){
        setInput(inputValue);
        searchLocation(inputValue);

    }

    return(
        <div className="navbar-div">
            <img className="weather-logo" src={Weather} alt="Weather Logo" />
            <h1 className="title">My Weather</h1>
            <div className="search-div">
                <input 
                    className="searchbar" 
                    value={input} 
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder="Search Location" 
                />
                {results && results.length > 0 && <SearchResultsList results={results} getSearchedLocation={getSearchedLocation} />}
            </div>


        </div>
    )
}