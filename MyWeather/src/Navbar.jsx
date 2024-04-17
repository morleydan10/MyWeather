import React, { useState } from "react";



export default function Navbar (){

    const handleChange = () => {

        
    }



    return(
        <div className="navbar-div">
            <p className="title"> My Weather</p>
            <input className="searchbar" onChange={handleChange} placeholder="Search your Location"></input>
        </div>
    )
}