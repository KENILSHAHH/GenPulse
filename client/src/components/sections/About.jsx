import React from "react";
import { useState, useRef, useEffect } from "react";

const About = () => {
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

    const scrollSection = document.querySelector(".scroll-section");
    observer.observe(scrollSection);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <section className="flex flex-col items-center my-[50px] scroll-section">
      <h1 className="text-[56px] my-[50px] font-[600]">
        "Your Hair's Best Friend — Powered by AI and Blockchain"
      </h1>
      <div className="flex justify-around w-full py-[40px]">
        <div
          className={`flex flex-col items-center text-center w-[300px] gap-y-[10px] transition-all duration-500 ease-in-out ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <h1 className="text-[60px]">Instant AI Hair Analysis</h1>
          <p className="leading-6">
            Understand scalp and hair health in minutes.
          </p>
        </div>
        <div
          className={`flex flex-col items-center text-center w-[300px] gap-y-[10px] transition-all duration-500 ease-in-out delay-150 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <h1 className="text-[60px]">Scan-to-Earn Model</h1>
          <p className="leading-6">Earn rewards for contributing data.</p>
        </div>
        <div
          className={`flex flex-col items-center text-center w-[300px] gap-y-[10px] transition-all duration-500 ease-in-out delay-300 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <h1 className="text-[60px]">Desci Tokens Rewards</h1>
          <p className="leading-6">
            Support scientific advancements while benefiting from a
            decentralized economy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
