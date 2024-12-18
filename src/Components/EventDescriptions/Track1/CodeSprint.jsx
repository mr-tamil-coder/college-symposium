import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import EventImage from "../../../assets/symposium/bgmi.jpg";
import "./Eloquence.css";

const CodeSprint = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        scale: 1.05,
      });
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto p-6 gap-10">
      {/* Left: Event Image */}
      <motion.div
        ref={tiltRef}
        className="lg:w-1/2 w-full flex justify-center items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={EventImage}
          alt="BGMI Tournament"
          className="w-3/4 md:w-2/3 lg:w-2/3 object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right: Event Details */}
      <motion.div
        className="lg:w-3/4 w-full text-white flex flex-col gap-6 overflow-auto bg-transparent custom-scrollbar"
        style={{ maxHeight: "calc(100vh - 100px)" }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          ✨
          <span className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            BGMI Tournament
          </span>
        </h1>

        <section className="text-gray-300 text-justify">
          <p>
            Get ready to unleash your gaming prowess at the BGMI Game Tournament, a thrilling part of our college symposium! Compete against the best in an electrifying Battlegrounds Mobile India showdown, where strategy, teamwork, and precision are key. With exciting prizes, fierce battles, and an unforgettable experience, this tournament promises adrenaline-packed entertainment for gamers and spectators alike. Assemble your squad, gear up, and claim the ultimate victory!
          </p>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Event Rules
          </h2>
          <ul className="list-disc list-inside mt-4">
            <li>Battle Royale mode - ERANGLE</li>
            <li>4 members as a squad only allowed</li>
            <li>Fair Play is fundamental</li>
            <li>Any type of cheating, hacking or bug-exploiting will lead to instant disqualification</li>
          </ul>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Rounds
          </h2>
          <p>Total matches conducted will be 3 matches</p>
          <ul className="list-disc list-inside">
            <li>1st place – 10 points</li>
            <li>2nd place – 6 points</li>
            <li>3rd place – 5 points</li>
            <li>4th place – 4 points</li>
            <li>5th place – 3 points</li>
            <li>6th place – 2 points</li>
            <li>7th and 8th place – 1 point</li>
            <li>9th to 16th place – 0 points</li>
            <li>Per kill: 1 point</li>
          </ul>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Contact Details
          </h2>
          <ul className="list-disc list-inside">
            <li>S. John Wesley - 8778666311</li>
            <li>Larson David - 9384353707</li>
            <li>R. Karthik Raj - 7305925366</li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
};

export default CodeSprint;