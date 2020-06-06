import React, { Component } from 'react'

import images from './carousel.json';
import Slider from 'react-slick';


class Carousel extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true

        }
        return (
            <div className="slider">
                <div className="slick">
                    <Slider {...settings}>
                        {images.map((props) => {
                            return (
                                <img className="images"
                                    key={props.id}
                                    src={props.image}
                                    alt={props.image}
                                />
                            )
                        })}
                    </Slider>
                </div>
            </div>
        );
    }
}
export default Carousel;

