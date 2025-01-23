import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import EventImage from "../../../assets/symposium/MatterMind.jpg";
import "./Eloquence.css";

const MatterMind = () => {
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
          alt="MatterMind Event"
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
          💡✨
          <span className="text-head lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            MATTERMIND
          </span>
        </h1>

        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <p>
            Creativity meets logic in the art of prompt engineering. Are you
            ready to think outside the box and inside the code? Join us at{" "}
            <strong>MatterMind</strong>, where innovation and ingenuity collide
            in an unforgettable challenge.
          </p>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Event Rounds
          </h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li>
              <strong>Round 1 – Trick 'O Tick:</strong> An offline quiz on
              computer basics and algorithms.
            </li>
            <li>
              <strong>Round 2 – Pixel Craft:</strong>
              <ul className="mt-2 ml-6 list-disc list-inside">
                <li>
                  Each team will pick a set of keywords to use as prompts.
                </li>
                <li>
                  Teams will utilize platforms like DALL·E and Pilot to generate
                  an image based on the given keywords.
                </li>
                <li>
                  Teams must craft a creative and accurate image using the
                  appropriate prompts.
                </li>
              </ul>
            </li>
            <li>
              <strong>Round 3 – Unwrap the Code:</strong> Using few hints,
              participant teams must reverse-engineer the code or deduce the
              correct input that generates the output within a time limit.
            </li>
          </ul>
        </section>

        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <p>
            Teams that excel in each round will move to the next stage. In the
            world of prompts, every word is a key. Unlock the possibilities—one
            line at a time!
          </p>
        </section>
        {/* Enquiry Section */}
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            For Enquiry:
          </h2>
          <p className="text-body lg:text-2xl">
            Contact: <br />
            <strong>Prakash Rai :</strong> +919150509625
            <br />
          </p>
        </section>
        <footer className="text-gray-300 mt-4">
          <p className="text-center">Let the challenge begin!</p>
        </footer>
      </motion.div>
    </div>
  );
};

export default MatterMind;
