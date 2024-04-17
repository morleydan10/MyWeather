import React from "react"


export default function Card({ location }) {

    return (
        <div className="weather-card">
            <div className="upper-div">
                <span>This is the upper div</span>
                <h2 className="city-name">
                    {/* City Name */}
                </h2>

            </div>
            <div className="lower-div">
                <span>This is the lower div</span>
                
            </div>
        </div>
    )
}