import React from "react";
import "../assets/styles/Hero.css";
import sample from "../assets/images/frame_sample.jpg";
import sample2 from "../assets/images/sample2.jpeg";
import sample3 from "../assets/images/sample.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <div className="hero-headline">
            <h1>New Thoughts</h1>
          </div>
          <div className="hero-showcase">
            <div className="hero-showcase-items">
              <Slider {...settings}>
              <div className="hero-showcase-item">
                <img src={sample} alt="" />
              </div>
              <div className="hero-showcase-item">
                <img src={sample2} alt="" />
              </div>
              <div className="hero-showcase-item">
                <img src={sample3} alt="" height="400" />
              </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
