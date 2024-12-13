import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import EventImage from "../../../assets/symposium/GhostOps.jpg"; // Replace with your actual image
import "./Eloquence.css";

const GhostOps = () => {
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
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl text-justify mx-auto p-6 gap-10">
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
          alt="Ghost-Ops Event"
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
            Ghost-Ops: The CTF Solving Event
          </span>
        </h1>

        <section className="text-gray-300">
          <p>
            Get ready for the ultimate challenge at Ghost-Ops: The CTF Solving
            Event! Step into the world of covert operations and unravel digital
            mysteries in this high-stakes competition. As a participant, you’ll
            dive deep into four thrilling domains:
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>
              <strong>Cryptography:</strong> Crack encrypted messages and
              decipher hidden codes.
            </li>
            <li>
              <strong>Forensics:</strong> Become a digital detective, analyzing
              traces of data to solve complex cases.
            </li>
            <li>
              <strong>OSINT:</strong> Gather open-source intelligence from
              across the web to piece together vital clues.
            </li>
            <li>
              <strong>Steganography:</strong> Unmask hidden messages within
              images, audio, and files.
            </li>
          </ul>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Round 
          </h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Platform:</strong> CTFd
            </li>
            <li>
              <strong>CTF Type:</strong> Jeopardy
            </li>
            <li>
              <strong>Team Size:</strong> 2 Members
            </li>
            <li>
              <strong>Duration:</strong> 1 Hour
            </li>
            <li>
            In Ghost-Ops, participants will engage in a series of challenges spanning Cryptography, Forensics, OSINT, and Steganography.
            </li>
            <li>
            Each team will be given a limited timeframe of 1 hour to solve the challenges and accumulate points. 
            </li>
          </ul>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Event Rules
          </h2>
          <ul className="list-disc list-inside">
            <li>
              Disrupting the competition through DoS/DDoS attacks is strictly
              forbidden.
            </li>
            <li>
              Flag sharing is strictly prohibited; teams caught sharing flags
              will be disqualified.
            </li>
            <li>
              The winner will be determined by the number of challenges solved
              and who solved them first.
            </li>
            <li>
              The winner will be decided by the judges, and no arguments will be
              entertained.
            </li>
          </ul>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Contact Details
          </h2>
          <ul>
            <li>
              <strong>Subadevan:</strong> 8637607481
            </li>
            <li>
              <strong>Jayasuriya:</strong> 8667223747
            </li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
};

export default GhostOps;
