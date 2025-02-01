import Navbar from "@/components/Navbar";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="bg-[#efefef] min-h-[100vh] text-[#151515] font-sans lg:px-[100px] md:px-[50px]">
      <Navbar />
      <div className="flex flex-col items-center w-full mb-[50px]">
        <div className="flex flex-col items-center w-fit">
          <div className="flex flex-row items-center justify-center items-center gap-x-[10px]">
            <span className="w-[8px] h-[8px] bg-[#ee64ff] rounded-full" />
            <h1 className="uppercase text-[16px] font-[500]">Contact Form</h1>
            <span className="w-[8px] h-[8px] bg-[#ee64ff] rounded-full" />
          </div>
          <h1 className="font-[900] text-[80px]">Contact Us</h1>
          <div className="flex flex-col gap-y-[15px] w-full mt-[40px]">
            <p className="text-[14px]">Name</p>
            <Input type="text" placeholder="Enter your name" />
            <p className="text-[14px] mt-[10px]">E-mail</p>
            <Input type="email" placeholder="Enter your e-mail" />
            <p className="text-[14px] mt-[10px]">Message</p>
            <Textarea className="min-h-[100px]" placeholder="Your message..." />
          </div>
          <button className="w-fit mt-[30px] uppercase bg-[#151515] hover:bg-[#ee64ff] text-[18px] text-[#efefef] px-[30px] py-[10px] rounded-[4px] transition-all duration-300 ease-in-out">
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
