import React from "react";
import "./Slider";

export default function Btnslider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <i class="fa-solid fa-arrow-right fa-2xl"></i>
    </button>
  );
}
