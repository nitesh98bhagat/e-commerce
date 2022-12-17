import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Testing() {
  const slides = [
    {
      url: "https://m.media-amazon.com/images/I/6124QhAPExL._SX1500_.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/I/71NCXxTGJCL._SX3000_.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/I/710xff6TncL._SX3000_.jpg",
    },

    {
      url: "https://m.media-amazon.com/images/I/71cac9idZML._SX3000_.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     const isFirstSlide = currentIndex === 0;
  //     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  //     setCurrentIndex(newIndex);
  //   }, "1000");
  // }, [currentIndex]);

  return (
    <>
      <div className="max-w-[1400px] w-full m-auto  p-4 relative ">
        <div className="flex flex-row items-center">
          {/* Left Arrow */}
          <div className="  -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Image */}
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-[320px] rounded-2xl bg-top bg-cover duration-500"
          ></div>

          {/* Right Arrow */}
          <div className="  -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
        </div>

        {/* Dots */}
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled className={`${currentIndex===slideIndex? "text-pink-400":"text-slate-800"}`} />
            </div>
          ))}
        </div>
      </div>

      <h1 className="text-3xl">{currentIndex}</h1>
    </>
  );
}

export default Testing;
