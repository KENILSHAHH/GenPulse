"use client"

import React from "react";
import { useState, useEffect } from "react";

const HeroBottom = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    const scrollSection = document.querySelector(".words-section");
    observer.observe(scrollSection);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <section className="mt-[-30px]">
      <div className="flex flex-col gap-y-[10px] items-center ">
        <div className="flex flex-row items-center justify-center items-center gap-x-[10px]">
          <span className="w-[8px] h-[8px] bg-[#ee64ff] rounded-full" />
          <h1 className="uppercase text-[16px]">Genpulse AI Agent</h1>
          <span className="w-[8px] h-[8px] bg-[#ee64ff] rounded-full" />
        </div>
        <h1 className="text-center leading-none max-w-[800px] font-[800] text-[80px]">
          Revolutionizing Self-Care with AI and Blockchain
        </h1>
        <p className="mt-[20px] font-[300] text-[20px] text-center">
          Empowering you with AI-driven insights and blockchain rewards for
          holistic dermatology care.
        </p>
      </div>
      <div
        className={`words-section flex items-center justify-center text-[40px] font-[300] py-[40px] gap-x-[30px] transition-all duration-500 ease-in-out`}
      >
        <span
          className={`w-[12px] h-[12px] bg-[#ee64ff] rounded-full transition-all duration-500 ease-in-out ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-30"
          }`}
        />
        <p
          className={`transition-all duration-500 ease-in-out ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-30"
          }`}
        >
          Scan
        </p>
        <span
          className={`w-[12px] h-[12px] bg-[#ee64ff] rounded-full transition-all duration-500 ease-in-out ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-30"
          }`}
        />
        <p
          className={`transition-all duration-500 ease-in-out ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
        >
          Earn
        </p>
        <span
          className={`w-[12px] h-[12px] bg-[#ee64ff] rounded-full transition-all duration-500 ease-in-out ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
        />
        <p
          className={`transition-all duration-500 ease-in-out ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          Transform Your Hair Care With Genpulse
        </p>
        <span
          className={`w-[12px] h-[12px] bg-[#ee64ff] rounded-full transition-all duration-500 ease-in-out ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        />
      </div>
      <p className="uppercase my-[40px] text-[14px] text-center font-[400]">
        Unlock the power of AI-driven hair analysis. <br /> Contribute data for
        decentralized science (DeSci) and earn rewards while solving your hair
        care concerns
      </p>
      <div className="flex justify-around py-[50px]">
        <button className="uppercase bg-[#151515] hover:bg-[#ee64ff] text-[#efefef] px-[30px] py-[15px] rounded-[3px] transition-all duration-300 ease-in-out">
          Get Started with Genpulse
        </button>
        <button className="uppercase bg-[#151515] hover:bg-[#ee64ff] text-[#efefef] px-[30px] py-[15px] rounded-[3px] transition-all duration-300 ease-in-out">
          Learn More About Scan-to-Earn
        </button>
      </div>
    </section>
  );
};

export default HeroBottom;
