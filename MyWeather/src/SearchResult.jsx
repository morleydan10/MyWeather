import React from "react";

function SearchResult({ result, getSearchedLocation }){

    const handleClickResult = (id) => {
            getSearchedLocation("id:" + id);
            console.log("searching ...");
    };

    return(
        <div 
            className="result"
            onClick={ () => handleClickResult(result.id)}
            value={result.id}
        >
            {/* Shortens the result if the location is within the United States */}
            {result.name + ", " + result.region + ", " + (result.country.toLowerCase().includes("united states of america") ? "USA" : result.country)}
        </div>
    )
}

export default SearchResult;