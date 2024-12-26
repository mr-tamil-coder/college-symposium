import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import RobotImage from "../../../assets/symposium/robots.png";
import "./EnergiaNova.css";

const Batallia = () => {
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
          src={RobotImage}
          alt="Batallia de Robots"
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
          🤖  
          <span className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            Batallia de Robots: Speed Circuit Challenge
          </span>
        </h1>
        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <p>
            Join us for the <strong>Batallia de Robots: Speed Circuit Challenge</strong>, where participants race their custom-built robots through a thrilling obstacle course. 
          </p>
          <p>
            The event features qualifying time trials, elimination rounds, semifinals, and a final race to determine the ultimate champion. Robots must be autonomous, within specified size and weight limits, and equipped with sensors for navigation.
          </p>
          <p>
            Compete for prizes in categories like <strong>fastest robot</strong>, <strong>best design</strong>, and <strong>most innovative robot</strong>. Showcase your technical skills in this high-energy competition!
          </p>
        </section>

        <section className="text-gray-300">
          <h2>🛠️ 
          <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
              Rules and Regulations:
          </span></h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li>🤖 A robot must be autonomous with pre-defined algorithms (no remote control allowed during the race).</li>
            <li>🔍 Allowed sensors include infrared, ultrasonic, and optical sensors for line following and obstacle detection.</li>
          </ul>
        </section>

        <section className="text-gray-300">
          <h2>🚦
          <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
             Round Details:
          </span></h2>
          <h3 className="font-semibold mt-4 text-body lg:text-2xl">Round 1: Qualifying Round</h3>
          <ul className="list-disc list-inside mt-2 text-body lg:text-2xl">
            <li>Each robot gets two attempts to complete the track.</li>
            <li>The best time out of two attempts is recorded.</li>
          </ul>
          <h3 className="font-semibold mt-4 text-body lg:text-2xl">Round 2: Elimination Round</h3>
          <ul className="list-disc list-inside mt-2 text-body lg:text-2xl">
            <li>Robots compete in pairs, with the winner advancing to the next round.</li>
            <li>Pairings are based on qualifying times.</li>
          </ul>
          <h3 className="font-semibold mt-4 text-body lg:text-2xl">Round 3: Semifinals</h3>
          <ul className="list-disc list-inside mt-2 text-body lg:text-2xl">
            <li>Remaining robots are paired or grouped based on their performance in the elimination round.</li>
            <li>Winners of the semifinal round advance to the final round.</li>
          </ul>
          <h3 className="font-semibold mt-4 text-body lg:text-2xl">Round 4: Finals</h3>
          <ul className="list-disc list-inside mt-2 text-body lg:text-2xl">
            <li>The top 4 robots compete in a final race.</li>
            <li>The winner of the final race is declared the overall champion.</li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
};

export default Batallia;
