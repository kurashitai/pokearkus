"use client";

import React, { useState } from "react";
import Image from "next/image";

export function App() {
  const slides = [
    {
      url: "/comunidade.png",
    },
    {
      url: "/comunidade.png",
    },
    {
      url: "/comunidade.png",
    },
    {
      url: "/comunidade.png",
    },
    {
      url: "/comunidade.png",
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
    <div className="relative flex flex-col items-center">
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

      <div className="relative max-w-[1200px] w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[780px] py-16 px-4">
        <div className="w-full h-full rounded-[40px] border-white border-8 p-2 box-border relative">
          <div className="w-full h-full relative overflow-hidden rounded-[30px]">
            <Image
              src={slides[currentIndex].url}
              alt="Slide Image"
              layout="fill"
              objectFit="cover"
              className="rounded-[30px]"
            />
          </div>
        </div>

        {/* Left Arrow */}
        <div
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-[-110px] text-2xl rounded-full p-2 text-white cursor-pointer hidden xl:block"
          onClick={prevSlide}
        >
          <Image src="/back.png" alt="Back" width={95} height={95} />
        </div>
        {/* Right Arrow */}
        <div
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-[-110px] text-2xl rounded-full p-2 text-white cursor-pointer hidden xl:block"
          onClick={nextSlide}
        >
          <Image src="/forward.png" alt="Forward" width={95} height={95} />
        </div>
        {/* Setas para telas menores */}
        <div
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer block xl:hidden"
          onClick={prevSlide}
        >
          <Image src="/back.png" alt="Back" width={40} height={40} />
        </div>
        <div
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-white cursor-pointer block xl:hidden"
          onClick={nextSlide}
        >
          <Image src="/forward.png" alt="Forward" width={40} height={40} />
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
