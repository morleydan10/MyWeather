import React, { useEffect } from "react";

import ForecastList from "./ForecastList";

function ForecastBar ({ location, isCelcius }){

    console.log(location);
    
    return(
        <>
            <ForecastList /> 
        </>
    )
}

export default ForecastBar;