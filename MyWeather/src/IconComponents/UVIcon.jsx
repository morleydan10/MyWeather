import React from "react";

// Import UV icons
import UV1 from '../assets/uv-index-1.svg'
import UV2 from '../assets/uv-index-2.svg'
import UV3 from '../assets/uv-index-3.svg'
import UV4 from '../assets/uv-index-4.svg'
import UV5 from '../assets/uv-index-5.svg'
import UV6 from '../assets/uv-index-6.svg'
import UV7 from '../assets/uv-index-7.svg'
import UV8 from '../assets/uv-index-8.svg'
import UV9 from '../assets/uv-index-9.svg'
import UV10 from '../assets/uv-index-10.svg'
import UV11 from '../assets/uv-index-11.svg'

function UVIcon ({ UV }){

    // Icon Dictionary
    const uvTable = {
        '1': UV1,
        '2': UV2,
        '3': UV3,
        '4': UV4,
        '5': UV5,
        '6': UV6,
        '7': UV7,
        '8': UV8,
        '9': UV9,
        '10': UV10,
        '11': UV11
    }

    // Function to render icon that is located in the
    function uvIndex () {
        return uvTable[UV];
    }

    return(
        <img className="uv-icon" height="64px" width="64px" src={uvIndex()} /> 

    )
}

export default UVIcon;