import React from "react";
import SearchResult from "./SearchResult";

function SearchResultsList({ results, getSearchedLocation, setInput }){

    return(
        <div className="search-results-list">
            {results.map((result, id) => {
                return (
                <SearchResult result={result} key={id} getSearchedLocation={getSearchedLocation} setInput={setInput} />
                )
            })}
        </div>
    )
}

export default SearchResultsList;