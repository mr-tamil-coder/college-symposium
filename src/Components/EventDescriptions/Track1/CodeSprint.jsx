import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import EventImage from "../../../assets/symposium/CodeSprint.jpeg";
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
          alt="Code Sprint Event"
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
          ✧･ﾟ: ✦✨
          <span className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            CODE SPRINT ✨✦:･ﾟ✧
          </span>
        </h1>

        <section className="text-gray-300 text-justify">
          <p>
            Greetings from the Department of Information Technology!
          </p>
          <p>
            We are excited to welcome you to a national-level technical event
            that will challenge your creativity, problem-solving prowess, and technical expertise. Get ready to showcase your skills, compete with the best minds, and emerge victorious!
          </p>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Rules & Regulations
          </h2>
          <ul className="list-disc list-inside mt-4">
            <li>🍂 Participants can register individually or in teams of two.</li>
            <li>🍂 Adhere to the timelines and instructions for each round.</li>
            <li>🍂 Maintain fairness—unethical practices will lead to disqualification.</li>
            <li>🍂 Winners of each round will progress to the next stage.</li>
            <li>🍂 The judges' decisions will be final and binding.</li>
          </ul>
        </section>

        <section className="text-gray-300 text-justify">
          <p>
            Step into the world of innovation and technical excellence, and let the sprint begin!
          </p>
        </section>

        <footer className="text-gray-300 mt-4">
          <p className="text-center">Best Regards,</p>
          <p className="text-center font-bold">Department of Information Technology</p>
        </footer>
      </motion.div>
    </div>
  );
};

export default CodeSprint;
