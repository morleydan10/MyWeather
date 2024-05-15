import React from "react";

// Components
import TabletList from "./TabletList";

function Carousel({ location, isCelcius, USTimeTable }) {

    return (
        <div className="slider">
            <TabletList location={location} isCelcius={isCelcius} USTimeTable={USTimeTable}  />
        </div>
    )
}

export default Carousel;