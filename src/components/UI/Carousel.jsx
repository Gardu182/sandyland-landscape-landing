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
  { image: hardscape, title: "hardscape image" },
  { image: irrigation, title: "irrigation image" },
  { image: leveling, title: "leveling image" },
  { image: pathway, title: "pathway image" },
  { image: chainFencing, title: "chainLink image" },
  { image: retainwall, title: "retaininWall image" },
  { image: steelFencing, title: "steelfencing image" },
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
    <div className="h-[320px] md:h-[780px] max-w-[1200px] w-full m-auto py-10 px-5 relative">
      <div
        style={{ backgroundImage: `url(${slides[current].image})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>

      {/* left arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-[#006242] text-4xl p-2">
        <button onClick={previousSlide} aria-label="Previous Slide">
          <i className="bi bi-arrow-left-circle-fill"></i>
        </button>
      </div>
      {/* left arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-[#006242] text-4xl p-2">
        <button onClick={nextSlide} aria-label="Next Slide">
          <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center top-4 gap-2 py-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === i ? "bg-[#191818]" : "bg-[#006242]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
