"use client";

import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled, RxDot } from "react-icons/rx";
import Image from "next/image";

export function App() {
  const slides = [
    {
      url: "comunidade.png",
    },
    {
      url: "comunidade.png",
    },
    {
      url: "comunidade.png",
    },

    {
      url: "comunidade.png",
    },
    {
      url: "comunidade.png",
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

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div>
      <div className="relative flex flex-col gap-5 items-center justify-center py-10 pb-0">
        <button
          className="relative w-[284px] h-[63px] flex items-center justify-center px-6 text-black font-extrabold text-3xl bg-transparent border-none outline-none"
          style={{
            backgroundImage: `url('/textbg.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <span className="relative z-10">COMUNIDADE</span>
        </button>
      </div>
      <div className="max-w-[1200px] h-[780px] w-full m-auto py-16 px-4 relative group">
        <div className="w-full h-full rounded-[40px] border-white border-8 p-2 box-border">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-[30px] bg-center bg-cover duration-500"
          ></div>
        </div>
        {/* Left Arrow */}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-[-110px] text-2xl rounded-full p-2 text-white cursor-pointer hidden lg:block">
          <Image
            src="/back.png"
            alt="Back"
            width={95}
            height={95}
            onClick={prevSlide}
          />
        </div>
        {/* Right Arrow */}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-[-110px] text-2xl rounded-full p-2 text-white cursor-pointer hidden lg:block">
          <Image
            src="/forward.png"
            alt="Forward"
            width={95}
            height={95}
            onClick={nextSlide}
          />
        </div>
        {/* Setas para telas menores */}
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer block lg:hidden">
          <Image
            src="/back.png"
            alt="Back"
            width={40}
            height={40}
            onClick={prevSlide}
          />
        </div>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-white cursor-pointer block lg:hidden">
          <Image
            src="/forward.png"
            alt="Forward"
            width={40}
            height={40}
            onClick={nextSlide}
          />
        </div>

        {/* <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer mx-2`}
          >
            {currentIndex === slideIndex ? <RxDotFilled /> : <RxDot />}
          </div>
        ))}
      </div> */}
      </div>
    </div>
  );
}

export default App;
