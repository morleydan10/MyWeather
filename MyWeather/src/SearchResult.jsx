import React from "react";

function SearchResult({ result, getSearchedLocation, setInput }){

    const handleClickResult = (id) => {
            getSearchedLocation("id:" + id);
            setInput('');
    };

    return(
        <div 
            className="result"
            onClick={ () => handleClickResult(result.id)}
            value={result.id}
        >
            {/* Shortens the result if the location is within the United States or the UK */}
            {result.name + ", " + result.region + ", " + 
            (result.country.toLowerCase().includes("united states of america") ? "USA" : 
            result.country.toLowerCase().includes("united kingdom") ? "UK" : result.country)}
        </div>
    )
}

export default SearchResult;