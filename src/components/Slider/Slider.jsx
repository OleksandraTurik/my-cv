import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carusel = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="/assets/work5.jpg" alt="portfolio" />
        </div>
        <div>
          <img src="/assets/work3.jpg" alt="portfolio" />
        </div>
        <div>
          <img src="/assets/work4.jpg" alt="portfolio" />
        </div>
        <div>
          <img src="/assets/work2.jpg" alt="portfolio" />
        </div>
        <div>
          <img src="/assets/work6.jpg" alt="portfolio" />
        </div>
      </Slider>
    </div>
  );
};

export default Carusel;
