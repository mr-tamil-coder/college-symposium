import React from "react";
import randomColor from "randomcolor";
import "../text.css";
import Card from "./Card";

const CircuitTec = () => {
  const color = randomColor();

  // Events data
  const circuittechnicalEvents = [
    {
      id: 1,
      imageSrc: "path/to/energia-nova.jpg", // Replace with actual image path
      altText: "Energia Nova",
      label: "Energia Nova",
      onClick: () => alert("Energia Nova clicked"),
    },
    {
      id: 2,
      imageSrc: "path/to/casse-dete.jpg", // Replace with actual image path
      altText: "Casse-dete",
      label: "Casse-dete",
      onClick: () => alert("Casse-dete clicked"),
    },
    {
      id: 3,
      imageSrc: "path/to/batallia-de-robots.jpg", // Replace with actual image path
      altText: "Batallia de Robots",
      label: "Batallia de Robots",
      onClick: () => alert("Batallia de Robots clicked"),
    },
    {
      id: 4,
      imageSrc: "path/to/tescaflow.jpg", // Replace with actual image path
      altText: "Tescaflow",
      label: "Tescaflow",
      onClick: () => alert("Tescaflow clicked"),
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
        Circuit Branch - Technical Events
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

export default CircuitTec;
