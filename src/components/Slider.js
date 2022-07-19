import React, { useState } from "react";
import "./slider.css";
import dataSlider from "./dataSlider";
import Btnslider from "./Btnslider";

export default function Slider() {
  const [slideIndex, setslideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setslideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setslideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setslideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setslideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setslideIndex(index);
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={process.env.PUBLIC_URL + `/img/img${index + 1}.jpeg`} />
          </div>
        );
      })}
      <Btnslider moveSlide={nextSlide} direction={"next"} />
      <Btnslider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
