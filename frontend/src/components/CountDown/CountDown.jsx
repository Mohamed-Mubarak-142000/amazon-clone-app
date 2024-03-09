import React, { useEffect, useState } from "react";

const CountDown = ({ event }) => {
  const [timeLeft, setTimeLeft] = useState(CalcTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(CalcTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  function CalcTimeLeft() {
    const differance = +new Date(event.finishDate) - +new Date();
    let timeLeft = {};
    if (differance > 0) {
      timeLeft = {
        days: Math.floor(differance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((differance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((differance / (1000 * 60)) % 60),
        seconds: Math.floor((differance / 1000) % 60),
      };
    }
    return timeLeft;
  }

  const timerComponents = Object.keys(timeLeft).map((interval, index) => {
    if (!timeLeft[interval]) {
      return null;
    }
    return (
      <span
        key={index}
        className="text-[20px] w-[100px] flex flex-col items-center capitalize border-b-2 py-2"
      >
        <span className="">{interval}</span>
        <span className="text-[red]">{timeLeft[interval]}</span>
      </span>
    );
  });

  return (
    <div className=" w-[210px] h-[180px] flex items-center justify-center bg-[#4cd964] flex-wrap font-[700] shadow-lg rounded-lg mt-5 relative">
      {timerComponents.length ? (
        timerComponents
      ) : (
        <h2 className="capitalize font-[700] text-red-700 text-[20px]">
          Sorry , Time's up
        </h2>
      )}

      <span className="absolute top-[-50%] right-[50%] translate-x-[50%] translate-y-[40%] h-[100px] w-[170px] border-4 z-[-1] border-[#007aff] rounded-full"></span>
      <span className="absolute top-[-50%] right-[50%] translate-x-[50%] translate-y-[46%] h-[100px] w-[170px] border-4 z-[-1] border-[#007aff] rounded-full"></span>
    </div>
  );
};

export default CountDown;
