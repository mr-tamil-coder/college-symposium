import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2024-09-27T00:00:00').getTime();
    const currentTime = new Date().getTime();
    const difference = eventDate - currentTime;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
  
  const formatedTimeLeft={
    days: timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days,
    hours: timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours,
    minutes: timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes,
    seconds: timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds
  }
    return formatedTimeLeft;
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
      <h1 className="text-4xl font-bold py-3 ">Event will start at </h1>
      <div className="grid grid-cols-4 gap-4 text-center m-3">
        <div className="bg-gray-800  rounded-lg shadow-lg">
          <p className="text-3xl px-4 font-semibold">{timeLeft.days}</p>
          <p className="mt-2 text-xs px-4 uppercase">Days</p>
        </div>
        <div className="bg-gray-800  rounded-lg shadow-lg">
          <p className="text-3xl px-4 font-semibold">{timeLeft.hours}</p>
          <p className="mt-2 text-xs px-4 uppercase">Hours</p>
        </div>
        <div className="bg-gray-800  rounded-lg shadow-lg">
          <p className="text-3xl px-4 font-semibold">{timeLeft.minutes}</p>
          <p className="mt-2 text-xs px-4 uppercase">Minutes</p>
        </div>
        <div className="bg-gray-800  rounded-lg shadow-lg">
          <p className="text-3xl px-4 font-semibold">{timeLeft.seconds}</p>
          <p className="mt-2 text-xs px-4 uppercase">Seconds</p>
        </div>
        
       
      </div>
    </div>
  );
};

export default CountdownTimer;
