"use client";

import CountUp from "react-countup";
import { useRef, useEffect } from "react";

const Counters = () => {
  const sectionRef = useRef(null);
  const hasStarted = useRef(false);
  const startCounters = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          startCounters.current.forEach((start) => start && start());
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="flex flex-col items-center my-[50px]">
      <div className="flex flex-row justify-around w-full py-[70px] gap-x-[20px]">
        <div className="flex flex-col items-center gap-y-[10px]">
          <h1 className="text-[75px]">
            <CountUp end={10000}>
              {({ countUpRef, start }) => {
                startCounters.current[0] = start;
                return <span ref={countUpRef} />;
              }}
            </CountUp>
            +
          </h1>
          <p className="text-[14px]">contributors</p>
        </div>

        <div className="flex flex-col items-center gap-y-[10px]">
          <h1 className="text-[75px]">
            <CountUp end={2000}>
              {({ countUpRef, start }) => {
                startCounters.current[1] = start;
                return <span ref={countUpRef} />;
              }}
            </CountUp>
            +
          </h1>
          <p className="text-[14px]">brands using Genpulse data</p>
        </div>

        <div className="flex flex-col items-center gap-y-[10px]">
          <h1 className="text-[75px]">
            $
            <CountUp start={0.0} decimals={1} end={1}>
              {({ countUpRef, start }) => {
                startCounters.current[2] = start;
                return <span ref={countUpRef} />;
              }}
            </CountUp>
            M+
          </h1>
          <p className="text-[14px]">in rewards distributed</p>
        </div>
      </div>
    </section>
  );
};

export default Counters;
