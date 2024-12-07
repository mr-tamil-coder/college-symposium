import React from "react";
import randomColor from "randomcolor";
import "../text.css";
import Logo from "../utils/Img/TechLogo.jpg";
import Card from "./Card";
import RandomEvents from "./RandomEvents";

const CircuitnTech = () => {
  const color = randomColor();

  // Events data
  const circuittechnicalEvents = [
    {
      id: 1,
      imageSrc: Logo, // Replace with actual image path
      altText: "Deadly deeds",
      label: "Deadly deeds",
      onClick: () => alert("Deadly deeds clicked"),
    },
    {
      id: 2,
      imageSrc: Logo, // Replace with actual image path
      altText: "Ipl Auction",
      label: "Ipl Auction",
      onClick: () => alert("Ipl Auction clicked"),
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
        Non Technical Events
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
};

export default CircuitnTech;
