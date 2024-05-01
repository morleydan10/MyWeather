import React from "react";
import SearchResult from "./SearchResult";

function SearchResultsList({ results, getSearchedLocation }){

    return(
        <div className="search-results-list">
            {results.map((result, id) => {
                return (
                <SearchResult result={result} key={id} getSearchedLocation={getSearchedLocation} />
                )
            })}
        </div>
    )
}

export default SearchResultsList;