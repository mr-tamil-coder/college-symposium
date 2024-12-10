import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import EventImage from "../../assets/symposium/MysteryVault.png"; // Replace with your actual image
import "./MysteryVault.css"; // Using the same CSS file for consistency

const MysteryVault = () => {
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
    <div className="flex flex-col lg:flex-row items-center lg:items-middle justify-between max-w-7xl mx-auto p-6 gap-10">
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
          alt="Mystery Vault Event"
          className="w-3/4 md:w-2/3 lg:w-2/3 object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right: Event Details */}
      <motion.div
        className="lg:w-1/2 w-full text-white flex flex-col gap-6 overflow-auto bg-transparent custom-scrollbar"
        style={{ maxHeight: "calc(100vh - 100px)" }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          ✨
          <span className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            Mystery Vault
          </span>
        </h1>
        <p className="text-gray-300">
          <strong>Date:</strong> _________<br />
          <strong>Time:</strong> _________<br />
          <strong>Venue:</strong> _________<br />
          <strong>Team Size:</strong> _________
        </p>

        {/* Description Section */}
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Description
          </h2>
          <p>
            Mystery Vault is an intriguing two-round event that combines
            problem-solving, creativity, and sensory skills. Participants engage
            in unique challenges to uncover answers through fun and engaging
            activities:
          </p>
          <ul className="list-disc list-inside">
            <li>
              <strong>Round 1: Pick the Ball & Arrange the Puzzle</strong> -
              Teams use a pen to pick up balls with letters, numbers, or symbols
              and arrange them to solve a puzzle.
            </li>
            <li>
              <strong>Round 2: Taste & Tell the Tech Word</strong> - Blindfolded
              participants taste different food items and identify tech-related
              words as clues for their teammates.
            </li>
          </ul>
        </section>

        {/* Rules and Regulations Section */}
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Rules and Regulations
          </h2>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 gradient-text">
            Round 1: Pick the Ball & Arrange the Puzzle
          </h3>
          <ul className="list-disc list-inside">
            <li>Teams must use a pen to pick up balls, with no direct hand contact.</li>
            <li>A time limit of 1 minute is given to complete the task.</li>
            <li>Dropping the ball more than three times will result in disqualification.</li>
          </ul>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 gradient-text">
            Round 2: Taste & Tell the Tech Word
          </h3>
          <ul className="list-disc list-inside">
            <li>Participants will be blindfolded during the task.</li>
            <li>Guess the tech word within 30 seconds for each item.</li>
            <li>No touching or smelling the food; only tasting is allowed.</li>
            <li>Incorrect guesses more than twice for a food item will move the team to the next item.</li>
          </ul>
        </section>

        {/* Enquiry Section */}
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            For Enquiry:
          </h2>
          <p>Contact us for further details!</p>
        </section>
      </motion.div>
    </div>
  );
};

export default MysteryVault;
