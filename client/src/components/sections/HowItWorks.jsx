"use client"

import React from "react";
import { useState, useRef, useEffect } from "react";

const HowItWorks = () => {
  const [hover, setHover] = useState(1);
  const [inViewCards, setInViewCards] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInViewCards(true);
        }
      },
      { threshold: 0.5 }
    );

    const cardsSection = document.querySelector(".cards-section");
    observer.observe(cardsSection);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <section className="cards-section flex flex-col items-center my-[80px]">
      <button className="my-[50px] text-[18px] uppercase bg-[#151515] hover:bg-[#ee64ff] text-[#efefef] px-[40px] py-[15px] rounded-[3px] transition-all duration-300 ease-in-out">
        Explore How it Works
      </button>
      <div className="flex flex-row justify-around w-full py-[40px] gap-x-[20px]">
        <div
          className={`flex flex-col items-start gap-y-[50px] bg-white px-[20px] py-[20px] w-[280px] transition-all duration-500 ease-in-out ${
            inViewCards
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
          onMouseEnter={() => setHover(1)}
        >
          <p className="text-left leading-6">
            Scan your scalp with our portable AI-powered device.
          </p>
          <h1
            className={`${
              hover == 1 ? "text-[#333333]" : "text-[#d6d6d6]"
            } text-[120px] `}
          >
            01
          </h1>
        </div>
        <div
          className={`flex flex-col items-start gap-y-[50px] bg-white px-[20px] py-[20px] w-[280px] transition-all duration-500 ease-in-out delay-150 ${
            inViewCards
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
          onMouseEnter={() => setHover(2)}
        >
          <p className="text-left leading-6">
            Receive instant, personalized hair and scalp analysis.
          </p>
          <h1
            className={`${
              hover == 2 ? "text-[#333333]" : "text-[#d6d6d6]"
            } text-[120px] `}
          >
            02
          </h1>
        </div>
        <div
          className={`flex flex-col items-start gap-y-[50px] bg-white px-[20px] py-[20px] w-[280px] transition-all duration-500 ease-in-out delay-300 ${
            inViewCards
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
          onMouseEnter={() => setHover(3)}
        >
          <p className="text-left leading-6">
            Contribute your data to DeSci securely on the blockchain.
          </p>
          <h1
            className={`${
              hover == 3 ? "text-[#333333]" : "text-[#d6d6d6]"
            } text-[120px] `}
          >
            03
          </h1>
        </div>
        <div
          className={`flex flex-col items-start gap-y-[50px] bg-white px-[20px] py-[20px] w-[280px] transition-all duration-500 ease-in-out delay-450 ${
            inViewCards
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
          onMouseEnter={() => setHover(4)}
        >
          <p className="text-left leading-6">
            Earn desci tokens and use them to redeem exclusive rewards.
          </p>
          <h1
            className={`${
              hover == 4 ? "text-[#333333]" : "text-[#d6d6d6]"
            } text-[120px] `}
          >
            04
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
