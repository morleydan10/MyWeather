import React from "react";

// Components
import TabletList from "./TabletList";

// Icons
import Prev from '../src/assets/chevron_left.svg';
import Next from '../src/assets/chevron_right.svg';

function Carousel({ location, isCelcius }) {

    return (
        <div className="slider">
            <TabletList location={location} isCelcius={isCelcius} />
            <div className="slider-buttons">
                <div className="back-div">
                    <button className="prev-button">
                        <img src={Prev} />
                    </button>
                </div>
                <div className="forward-div">
                    <button className="next-button" >
                        <img src={Next} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Carousel;