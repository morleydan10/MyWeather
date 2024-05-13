import React from "react";
import Slider from "react-slick";

// Components
import TabletList from "./TabletList";

// Icons
import Prev from '../src/assets/chevron_left.svg';
import Next from '../src/assets/chevron_right.svg';

function Carousel({ location, isCelcius }) {

    // const settings = {
    //     dots: false,
    //     infinite: false,
    //     centerMode: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    // }

    return (
        <div className="slider">
            <div className="back-div">
                <button className="prev-button">
                    <img src={Prev} />
                </button>
            </div>
            <TabletList location={location} isCelcius={isCelcius} />
            <div className="forward-div">
                <button className="next-button">
                    <img src={Next} />
                </button>
            </div>
        </div>
    )
}

export default Carousel;