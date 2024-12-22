import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import deadly from "../../../assets/symposium/deadly.png"; // Replace with your actual image
import "./MysteryVault.css";

const DeadlyDeeds = () => {
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
          src={deadly}
          alt="Deadly Deeds"
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
            Deadly Deeds: Mystery Unveiled
          </span>
        </h1>

        <section className="text-gray-300 text-justify">
          <p>
            Join us for the Deadly Deeds: Mystery Unveiled, an engaging and interactive event where participants become detectives to solve a thrilling crime. Each participant receives a character profile, complete with secrets and motives, and must investigate the crime scene, gather clues, and question suspects. The goal is to piece together the evidence and identify the culprit before time runs out. This immersive experience combines role-playing, critical thinking, and teamwork, making it a memorable and exciting challenge for all involved.
          </p>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Rules and Regulations
          </h2>
          <ul className="list-disc list-inside mt-4">
            <li>The event will last for a set duration. Participants must complete the investigation and identify the culprit before time runs out.</li>
            <li>Participants must remain in character for the entire duration of the event. This enhances the immersive experience and helps the story unfold naturally.</li>
            <li>All clues and evidence are accessible to everyone, but participants must be observant and ask questions to discover hidden details.</li>
            <li>Participants are encouraged to interact with other characters to gather information. However, physical confrontation or aggressive behavior is strictly prohibited.</li>
          </ul>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Event Flow
          </h2>
          <p>
            At first, the introduction and character briefing takes place. Next, the detective starts to hunt the clues and begin the investigation. Then, the detective can question the suspects and verify the alibis. At last, the detective can make a final accusation and present the theories. The host will reveal the real culprit and explain how the clues led to the identification of the murderer.
          </p>
        </section>

        
      </motion.div>
    </div>
  );
};

export default DeadlyDeeds;
