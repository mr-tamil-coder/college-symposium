import React from "react";
import randomColor from "randomcolor";
import "../text.css";
import Card from "./Card";
import Image from '../utils/Img/TechLogo.jpg';

const NonCircuitTec = () => {
    const color = randomColor();

    // Events data
    const circuittechnicalEvents = [
      {
        id: 1,
        imageSrc: Image, // Replace with actual image path
        altText: "Eloquence",
        label: "Eloquence",
        onClick: () => alert("Eloquence clicked"),
      },
      {
        id: 2,
        imageSrc: Image, // Replace with actual image path
        altText: "Wizzup",
        label: "Wizzup",
        onClick: () => alert("Wizzup clicked"),
      },
      {
        id: 3,
        imageSrc: Image, // Replace with actual image path
        altText: "MatterMind",
        label: "MatterMind",
        onClick: () => alert("MatterMind clicked"),
      },
      {
        id: 4,
        imageSrc: Image, // Replace with actual image path
        altText: "Viz Your Way",
        label: "Viz Your Way",
        onClick: () => alert("Viz Your Way clicked"),
      },
      {
        id: 5,
        imageSrc: Image, // Replace with actual image path
        altText: "GhostOps-CTF",
        label: "GhostOps-CTF",
        onClick: () => alert("GhostOps-CTF clicked"),
      },
      {
        id: 6,
        imageSrc: Image, // Replace with actual image path
        altText: "Code Sprint",
        label: "Code Sprint",
        onClick: () => alert("Code Sprint clicked"),
      },
      
    ];
  
    return (
      <div className="max-w-7xl mx-auto p-6">
        <h3
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-white uppercase event-text tracking-widest"
          style={{
            textShadow: `2px 2px 15px ${color}`,
          }}
        >
          Technical Events
        </h3>
  
        <div>
          <main className="card-container gap-10 relative flex flex-wrap justify-center w-full">
            {/* Loop through each event and render a Card */}
            {circuittechnicalEvents.map((card) => (
              <Card
                key={card.id}
                imageSrc={card.imageSrc}
                altText={card.altText}
                label={card.label}
                onClick={card.onClick}
              />
            ))}
          </main>
        </div>
      </div>
    );
}

export default NonCircuitTec