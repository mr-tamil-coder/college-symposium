import React from 'react';
import eloquence from "../../assets/EventPosters/PaperPresentation.png";
import "./Eloquence.css";

const Eloquence = ({ date, time, venue, enquiry }) => {
  return (
    <div className="glassmorphic-container flex flex-wrap">
      {/* Poster with glass morph effect */}
      <div className="event-poster w-full md:w-1/2 p-4 flex justify-center items-center">
        <div className="p-4 w-full max-w-md">
          <img
            src={eloquence}
            alt="Event Poster"
            className="w-full h-auto border border-gray-300 shadow-lg"
          />
        </div>
      </div>

      {/* Event details with scrollable content */}
      <div className="event-details w-full md:w-1/2 p-4 overflow-y-auto max-h-[calc(100vh-100px)]">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Event Details</h1>
        <div className="event-info mb-4">
          <p className="text-sm md:text-base"><strong>Date:</strong> {date || "TBA"}</p>
          <p className="text-sm md:text-base"><strong>Time:</strong> {time || "TBA"}</p>
          <p className="text-sm md:text-base"><strong>Venue:</strong> {venue || "TBA"}</p>
          <p className="text-sm md:text-base"><strong>Team Size:</strong> 2 members per team</p>
        </div>

        {/* Description */}
        <div className="event-description mb-4">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">Description:</h2>
          <p className="text-sm md:text-base lg:text-lg">
            Code Sprint is a thrilling two-round competition designed to challenge creativity and coding skills. Each round tests a unique aspect of participants' abilities:
          </p>
          <p className="text-sm md:text-base lg:text-lg"><strong>Round 1: AI Art Battle</strong> - Teams generate AI-based images based on prompts using a designated website.</p>
          <p className="text-sm md:text-base lg:text-lg"><strong>Round 2: Blind Coding</strong> - A coding challenge where one team member codes without a visible screen while the other provides guidance.</p>
        </div>

        {/* Rules and Regulations */}
        <div className="rules-and-regulations mb-4">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">Rules and Regulations:</h2>
          <h3 className="text-base md:text-lg lg:text-xl font-semibold mt-2">Round 1 - AI Art Battle</h3>
          <ul className="list-disc list-inside text-sm md:text-base lg:text-lg">
            <li>Teams must consist of 2 members.</li>
            <li>It is mandatory to bring a mobile phone with internet access.</li>
            <li>Images must be generated using the designated website; otherwise, disqualification applies.</li>
            <li>Inappropriate image generation is strictly prohibited.</li>
            <li>Multiple submissions are not allowed.</li>
            <li>The judge's decision is final.</li>
          </ul>
          <h3 className="text-base md:text-lg lg:text-xl font-semibold mt-2">Round 2 - Blind Coding</h3>
          <ul className="list-disc list-inside text-sm md:text-base lg:text-lg">
            <li>Teams must consist of 2 members.</li>
            <li>Mobile phones are prohibited during the round.</li>
            <li>Tampering with the screen will result in disqualification.</li>
            <li>Discussing answers with other teams is not allowed.</li>
            <li>Only Python, Java, and C++ are allowed as programming languages.</li>
            <li>Possession of cheat sheets will result in disqualification.</li>
            <li>The judge's decision is final.</li>
          </ul>
        </div>

        {/* Enquiry */}
        <div className="enquiry mt-4">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">For Enquiry:</h2>
          <p className="text-sm md:text-base lg:text-lg">{enquiry || "Contact us for more details."}</p>
        </div>
      </div>
    </div>
  );
};

export default Eloquence;
