"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex flex-row justify-between px-[20px]">
      <div onClick={() => router.push("/")} className="cursor-pointer">
        <DotLottieReact
          className="h-[100px]"
          src="https://lottie.host/4b7d1c1c-0770-4c6d-8af3-206ef7db5e4a/riO98rah5n.lottie"
          loop
          autoplay
        />
      </div>
      <div className="flex flex-row lg:gap-x-[30px] md:gap-x-[20px] gap-x-[10px] items-center">
        <span
          className="transition-all duration-250 ease hover:opacity-80 hover:translate-y-[1px] cursor-pointer"
          onClick={() => router.push("/")}
        >
          Home
        </span>
        <span className="transition-all duration-250 ease hover:opacity-80 hover:translate-y-[1px] cursor-pointer">
          About
        </span>
        <span
          className="transition-all duration-250 ease hover:opacity-80 hover:translate-y-[1px] cursor-pointer"
          onClick={() => router.push("/contact")}
        >
          Contact
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
