"use client";

import Navbar from "@/components/Navbar";
import Counters from "@/components/sections/Counters";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/Footer";
import About from "@/components/sections/About";
import HeroBottom from "@/components/sections/HeroBottom";

import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/components/sections/Hero"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="bg-[#efefef] text-[#151515] font-satoshi">
      <section className="hero lg:px-[100px] md:px-[50px] pb-[30px]">
        <Navbar />

        <Hero />
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
