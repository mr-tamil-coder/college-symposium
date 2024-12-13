import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import EventImage from "../../../assets/symposium/FreeFire.jpg"; // Replace with your actual image
import "./MysteryVault.css";

const FF = () => {
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
          alt="Free Fire Event"
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
            Gaming is not just a hobby, it's a passion.
          </span>
        </h1>

        <h2>
          🔥 <span  className="text-2xl lg:text-3xl font-bold gradient-text text-center">FREE FIRE: BATTLE FOR GLORY</span>🔥
        </h2>

        {/* Event Details */}
        <section className="text-gray-300 text-justify">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Rules & Regulations
          </h2>
          <ul className="list-disc list-inside">
            <li>⭐ Each team must consist of 4 members. (A Squad)</li>
            <li>⭐ Team should have a team name for their squad.</li>
            <li>⭐ Game mode will be Clash Squad & Classic (Bermuda).</li>
            <li>⭐ Mobile players only; PC players are not allowed.</li>
            <li>⭐ Hacking or cheating will lead to team disqualification.</li>
            <li>⭐ No gun skins, no character skills allowed.</li>
          </ul>
        </section>

        <h2>
          🔥<span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-center gradient-text">Show your gaming skills</span>🔥
        </h2>

        {/* Event Schedule */}
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Event Schedule
          </h2>
          <p><b>Date :</b> 01.02.2025 & 02.02.2025</p>
          <p><b>Time :</b> 3 PM to 8 PM</p>
          <p><b>Mode :</b> Online</p>
        </section>

        <p className="text-lg md:text-xl text-center mt-4 gradient-text">
          
        </p>
        <h2>
        ✨<span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-center gradient-text">Reserve your spot now and showcase your pro gaming skills in Free Fire!</span>✨
        </h2>

        {/* Contact Details */}
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Contact Details
          </h2>
          <p>
            For more details, contact:
            <ul className="list-disc list-inside">
              <li><b>Job Aoushadan N</b> - 7358195381</li>
              <li><b>Vishall R</b> - 93618 91754</li>
            </ul>
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default FF;