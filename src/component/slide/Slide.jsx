import React from 'react'
import Slider from 'infinite-react-carousel';


import './slide.scss';
const Slide = ({ arrowsScroll, children, slidesToShow }) => {
    return (
        <div className="slide">
            <div className="container">
                <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
                    {children}
                </Slider>
            </div>
        </div>
    )
}

export default Slide
