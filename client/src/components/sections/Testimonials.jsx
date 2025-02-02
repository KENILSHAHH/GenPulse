import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Jack",
    about: "CEO at Tech Company",
    image: "/img/testimonial1.png",
    testimonial:
      "Great portability; I can check my scalp health anytime, anywhere.",
    review: 5,
  },
  {
    name: "Jane Doe",
    about: "Student",
    image: "/img/testimonial2.png",
    testimonial:
      "I love that I can earn rewards for contributing my data to DeSci. It's a win-win situation.",
    review: 5,
  },
  {
    name: "Alice Smith",
    about: "Hair Enthusiast",
    image: "/img/testimonial3.png",
    testimonial:
      "I've been using Genpulse for a few months now, and I've seen a noticeable improvement in my hair health.",
    review: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center my-[50px] py-[50px]">
      <h1 className="text-[55px] font-[500]">Real Users, Real Results</h1>
      <div className="mt-[20px] leading-6 text-[#ee64ff]">
        <p>Testimonials & Success Stories</p>
        <p>5,000+ scans completed | 3,000+ active users</p>
      </div>
      <Carousel className="py-[50px] w-[800px]">
        <div className="flex flex-row justify-around gap-x-[100px]">
          <CarouselContent className="w-[800px]">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-[10px]">
                  <div className="bg-white rounded-[10px] h-[300px] flex flex-row gap-x-[15px] p-[20px] shadow-md">
                    <img
                      className="h-[full] rounded-[10px]"
                      src={testimonial.image}
                    />
                    <div className="flex flex-col gap-y-[10px] items-start justify-between px-[10px] py-[25px]">
                      <h1 className="text-[25px] font-[600] text-left leading-7">
                        "{testimonial.testimonial}"
                      </h1>
                      <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex flex-col gap-y-[10px] items-start w-full h-full">
                          <p className="text-[23px] font-[400]">
                            {testimonial.name}
                          </p>
                          <p className="text-[16px] text-[#555]">
                            {testimonial.about}
                          </p>
                        </div>

                        <div className="flex flex-row gap-x-[2px]">
                          {[...Array(testimonial.review)].map((_, index) => (
                            <svg
                              key={index}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#ee64ff"
                              viewBox="0 0 24 24"
                              strokeWidth="0"
                              stroke="#ee64ff"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                              />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="rounded-full h-fit border border-[#ccc] hover:bg-[#ee64ff] p-[6px] transition-all duration-300 ease-in-out" />
          <CarouselNext className="rounded-full h-fit border border-[#ccc] hover:bg-[#ee64ff] p-[6px] transition-all duration-300 ease-in-out" />
        </div>
      </Carousel>
    </section>
  );
};

export default Testimonials;
