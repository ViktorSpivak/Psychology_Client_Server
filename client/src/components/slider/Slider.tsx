import React, { FC } from "react";
import Slider from "react-slick";
import style from "./slider.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const SimpleSlider: FC = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <h3 className={style.card}>1</h3>
        </div>
        <div>
          <h3 className={style.card}>2</h3>
        </div>
        <div>
          <h3 className={style.card}>3</h3>
        </div>
        <div>
          <h3 className={style.card}>4</h3>
        </div>
        <div>
          <h3 className={style.card}>5</h3>
        </div>
        <div>
          <h3 className={style.card}>6</h3>
        </div>
      </Slider>
    </div>
  );
};
