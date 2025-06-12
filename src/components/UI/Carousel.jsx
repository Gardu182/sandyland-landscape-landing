import React, { useState } from "react";
import { useEffect } from "react";
import hardscape from "../../assets/hardscape.jpg";
import irrigation from "../../assets/irrigation.jpg";
import leveling from "../../assets/leveling.jpg";
import pathway from "../../assets/pathway.jpg";
import chainFencing from "../../assets/chain_link_fencing.jpg";
import retainwall from "../../assets/retainin_wall.jpg";
import steelFencing from "../../assets/steel_fencing.jpeg";

const slides = [
  hardscape,
  irrigation,
  leveling,
  pathway,
  chainFencing,
  retainwall,
  steelFencing,
];

const Carousel = () => {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  let nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform ease-out w-full duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <i className="bi bi-arrow-left-circle-fill"></i>
        </button>
        <button onClick={nextSlide}>
          <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
      </div>
      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-3 h-3 cursor-pointer ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
