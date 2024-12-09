import React from 'react';

const EventDescription = () => {
  return (
    <div className="event-description-container flex flex-wrap">
      <div className="event-poster w-full md:w-1/2 p-4">
        <img
          src="path/to/your/event-poster.jpg"
          alt="Event Poster"
          className="w-full h-auto border border-gray-300 shadow-lg"
        />
      </div>
      <div className="event-details w-full md:w-1/2 p-4">
        <h1 className="text-3xl font-bold mb-4">Event Details</h1>
        <div className="event-info mb-4">
          <p><strong>Date:</strong> __________</p>
          <p><strong>Time:</strong> _________</p>
          <p><strong>Venue:</strong> __________</p>
          <p><strong>Team Size:</strong> 2 members per team</p>
        </div>
        <div className="event-description mb-4">
          <h2 className="text-xl font-semibold">Description:</h2>
          <p>
            Code Sprint is a thrilling two-round competition designed to challenge creativity and coding skills. Each round tests a unique aspect of participants' abilities:
          </p>
          <p><strong>Round 1: AI Art Battle</strong> - Teams generate AI-based images based on prompts using a designated website.</p>
          <p><strong>Round 2: Blind Coding</strong> - A coding challenge where one team member codes without a visible screen while the other provides guidance.</p>
        </div>
        <div className="rules-and-regulations mb-4">
          <h2 className="text-xl font-semibold">Rules and Regulations:</h2>
          <h3 className="font-semibold">Round 1 - AI Art Battle</h3>
          <ul className="list-disc list-inside">
            <li>Teams must consist of 2 members.</li>
            <li>It is mandatory to bring a mobile phone with internet access.</li>
            <li>Images must be generated using the designated website; otherwise, disqualification applies.</li>
            <li>Inappropriate image generation is strictly prohibited.</li>
            <li>Multiple submissions are not allowed.</li>
            <li>The judge's decision is final.</li>
          </ul>
          <h3 className="font-semibold mt-2">Round 2 - Blind Coding</h3>
          <ul className="list-disc list-inside">
            <li>Teams must consist of 2 members.</li>
            <li>Mobile phones are prohibited during the round.</li>
            <li>Tampering with the screen will result in disqualification.</li>
            <li>Discussing answers with other teams is not allowed.</li>
            <li>Only Python, Java, and C++ are allowed as programming languages.</li>
            <li>Possession of cheat sheets will result in disqualification.</li>
            <li>The judge's decision is final.</li>
          </ul>
        </div>
        <div className="enquiry mt-4">
          <h2 className="text-xl font-semibold">For Enquiry:</h2>
          <p>___________</p>
        </div>
      </div>
    </div>
  );
};

export default EventDescription;
