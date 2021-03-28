import React from "react";
import Slider from "react-slick";
import style from "./slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IFeedback } from "../../../../common/interfaces";

interface IProps {
  list: [IFeedback];
}
export const SimpleSlider = ({ list }: IProps) => {
  const sliderList: JSX.Element[] = list.map((el: IFeedback, idx: number) => (
    <div key={idx}>
      <p className={style.card}>{el.description}</p>
    </div>
  ));
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
      <Slider {...settings}>{sliderList}</Slider>
    </div>
  );
};
