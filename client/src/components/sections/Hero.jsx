"use client";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../../app/lotties/hero.json";

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex items-center justify-center">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Hero;
