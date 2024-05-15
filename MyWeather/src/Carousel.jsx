import React, { useState } from "react";

// Components
import TabletList from "./TabletList";

// Icons
import Prev from '../src/assets/chevron_left.svg';
import Next from '../src/assets/chevron_right.svg';

function Carousel({ location, isCelcius }) {


    return (
        <div className="slider">
            <TabletList location={location} isCelcius={isCelcius}  />
        </div>
    )
}

export default Carousel;