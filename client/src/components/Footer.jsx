import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center w-full pt-[50px] pb-[30px] gap-y-[20px]">
      <div className="flex flex-row gap-x-[50px] w-fit">
        <span className="cursor-pointer rounded-full h-fit p-[10px] transition-all duration-300 ease hover:bg-[#ee64ff] hover:translate-y-[2px]">
          <img className="h-[20px]" src="/img/twitter.png" />
        </span>
        <span className="cursor-pointer rounded-full h-fit p-[10px] transition-all duration-300 ease hover:bg-[#ee64ff] hover:translate-y-[2px]">
          <img className="h-[20px]" src="/img/telegram.png" />
        </span>
        <span className="cursor-pointer rounded-full h-fit p-[10px] transition-all duration-300 ease hover:bg-[#ee64ff] hover:translate-y-[2px]">
          <img className="h-[20px]" src="/img/email.png" />
        </span>
      </div>

      <div className="flex flex-row gap-x-[20px] mt-[50px]">
        <p className="cursor-pointer transition-all duration-250 ease hover:translate-y-[1px] hover:text-[#8e8c87]">
          Home
        </p>
        <p className="text-[#8e8c87] font-[300]">|</p>
        <p className="cursor-pointer transition-all duration-250 ease hover:translate-y-[1px] hover:text-[#8e8c87]">
          About us
        </p>
        <p className="text-[#8e8c87] font-[300]">|</p>
        <p className="cursor-pointer transition-all duration-250 ease hover:translate-y-[1px] hover:text-[#8e8c87]">
          Products
        </p>
        <p className="text-[#8e8c87] font-[300]">|</p>
        <p className="cursor-pointer transition-all duration-250 ease hover:translate-y-[1px] hover:text-[#8e8c87]">
          Contact us
        </p>
      </div>

      <div className="flex flex-row gap-x-[10px] text-[#8e8c87] text-[14px]">
        <span className="text-[#151515]">©</span>
        <span>2025 GENPULSE.</span>
        <span>All rights reserved.</span>
        <span className="cursor-pointer text-[#151515] underline">
          Privacy Policy
        </span>
      </div>
    </footer>
  );
};

export default Footer;
