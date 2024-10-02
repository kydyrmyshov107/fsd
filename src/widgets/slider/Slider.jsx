import { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import css from "./slider.module.scss";

const AppSlider = ({ slides, loop = true, autoplay = false }) => {
  const [pause, setPause] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: loop,
    slidesPerView: 1,
    spacing: 10,
    dragStart: () => setPause(true),
    dragEnd: () => setPause(false),
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  useEffect(() => {
    let timer;
    if (autoplay && !pause && instanceRef.current) {
      timer = setInterval(() => {
        instanceRef.current.next();
      }, 3000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [autoplay, pause, instanceRef]);

  // Function to move to the previous slide or to the last one if at the start
  const handlePrev = () => {
    if (currentSlide === 0) {
      instanceRef.current?.moveToIdx(slides.length - 1);
    } else {
      instanceRef.current?.prev();
    }
  };

  // Function to move to the next slide or to the first one if at the end
  const handleNext = () => {
    if (currentSlide === slides.length - 1) {
      instanceRef.current?.moveToIdx(0);
    } else {
      instanceRef.current?.next();
    }
  };

  return (
    <div className={css.slider_container}>
      <div ref={sliderRef} className={css.keen_slider}>
        {slides.map((slide, idx) => (
          <div key={idx} className="keen-slider__slide">
            {slide}
          </div>
        ))}
      </div>

      {/* Arrow Controls */}
      <button
        className={css.slider_control + " " + css.prev}
        onClick={handlePrev}
      >
        ‹
      </button>
      <button
        className={css.slider_control + " " + css.next}
        onClick={handleNext}
      >
        ›
      </button>

      {/* Pagination Dots */}
      <div className={css.pagination}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`${css.pagination_dot} ${currentSlide === idx ? css.active : ""}`}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default AppSlider;
