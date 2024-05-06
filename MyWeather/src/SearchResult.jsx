import React from "react";

function SearchResult({ result, getSearchedLocation, setInput }){

    // Handles when user selects location from the dropdown
    const handleClickResult = (e) => {
        console.log("I was clicked...");
        getSearchedLocation("id:" + result.id);
        setInput('');
    };

    return(
        <div 
            className="result"
            onClick={handleClickResult}
        >
            {/* Shortens the result if the location is within the United States or the UK */}
            {result.name + ", " + result.region + ", " + 
            (result.country.toLowerCase().includes("united states of america") ? "USA" : 
            result.country.toLowerCase().includes("united kingdom") ? "UK" : result.country)}
        </div>
    )
}

export default SearchResult;
