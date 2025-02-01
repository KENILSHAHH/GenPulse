"use client";

import Lottie from "react-lottie";
import animationData from "./lotties/hero.json";

import Navbar from "@/components/Navbar";
import Counters from "@/components/sections/Counters";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/Footer";
import About from "@/components/sections/About";
import HeroBottom from "@/components/sections/HeroBottom";

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="bg-[#efefef] text-[#151515] font-sans">
      <section className="hero lg:px-[100px] md:px-[50px] pb-[30px]">
        <Navbar />

        <div className="flex items-center justify-center">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </section>

      <HeroBottom />

      <div className="text-center leading-none px-[80px] mt-[100px]">
        <About />

        <HowItWorks />

        <Counters />

        <Testimonials />

        <section className="my-[50px]">
          <div className="flex flex-row justify-around w-full py-[50px] gap-x-[20px]">
            <button className="uppercase bg-[#151515] text-[18px] hover:bg-[#ee64ff] text-[#efefef] px-[40px] py-[15px] rounded-[3px] transition-all duration-300 ease-in-out">
              Get Started
            </button>
            <button className="uppercase bg-[#151515] text-[18px] hover:bg-[#ee64ff] text-[#efefef] px-[40px] py-[15px] rounded-[3px] transition-all duration-300 ease-in-out">
              Subscribe to Updates
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
