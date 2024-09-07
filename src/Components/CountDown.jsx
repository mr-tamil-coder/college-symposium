import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2024-09-09T00:00:00').getTime();
    const currentTime = new Date().getTime();
    const timeLeft = eventDate - currentTime;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-blue-500 h- flex flex-col justify-center  bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-2xl ">Event will start at </h1>
      <div className="grid grid-cols-4 gap-7 text-center m-3">
        <div className="bg-gray-800  rounded-lg shadow-lg">
          <p className="text-5xl px-4 font-semibold">{timeLeft.days}</p>
          <p className="mt-2 text-sm px-4 uppercase">Days</p>
        </div>
        <div className="bg-gray-800  rounded-lg shadow-lg">
          <p className="text-5xl px-4 font-semibold">{timeLeft.hours}</p>
          <p className="mt-2 text-sm px-4 uppercase">Days</p>
        </div>
        <div className="bg-gray-800  rounded-lg shadow-lg">
          <p className="text-5xl px-4 font-semibold">{timeLeft.minutes}</p>
          <p className="mt-2 text-sm px-4 uppercase">Days</p>
        </div>
        <div className="bg-gray-800  rounded-lg shadow-lg">
          <p className="text-5xl px-4 font-semibold">{timeLeft.seconds}</p>
          <p className="mt-2 text-sm px-4 uppercase">Days</p>
        </div>
        
       
      </div>
    </div>
  );
};

export default CountdownTimer;
