import React from "react";
import randomColor from "randomcolor";
import "../text.css";
import Card from "./Card";
import Image from "../utils/Img/TechLogo.jpg";
import bgmi from "../assets/symposium/BGMIposter.jpg";
import ff from "../assets/symposium/FreeFireEvent.jpg";
import { Link } from "react-router-dom";
const NonCircuitnTech = () => {
  const color = randomColor();

  // Events data
  const circuittechnicalEvents = [
    {
      id: 1,
      imageSrc: Image, // Replace with actual image path
      altText: "Cinephilia",
      label: "Cinephilia",
      onClick: () => alert("Cinephilia clicked "),
    },
    {
      id: 2,
      imageSrc: Image, // Replace with actual image path
      altText: "Mystery Vault",
      label: "Mystery Vault",
      onClick: () => alert("Mystery Vault clicked"),
    },
    {
      id: 3,
      imageSrc: Image, // Replace with actual image path
      altText: "Deadly Deeds",
      label: "Deadly Deeds",
      onClick: () => alert("Deadly Deeds clicked"),
    },
    {
      id: 4,
      imageSrc: Image, // Replace with actual image path
      altText: "IPL Auction",
      label: "IPL Auction",
      onClick: () => alert("IPL Auction clicked"),
    },
    {
      id: 5,
      imageSrc: bgmi, // Replace with actual image path
      altText: "BGMI",
      label: "BGMI",
      path: "/bgmi",
      // onClick: () => alert("BGMI clicked"),
    },
    {
      id: 6,
      imageSrc: ff, // Replace with actual image path
      altText: "Free Fire",
      label: "Free Fire",
      path: "/ff",
      // onClick: () => alert("Free Fire clicked"),
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
        Non-Technical Events
      </h3>

      <div>
        <main className="card-container gap-10 relative flex flex-wrap justify-center w-full">
          {/* Loop through each event and render a Card */}
          {circuittechnicalEvents.map((card) => (
            <Link to={card.path} key={card.id}>
            <Card
              imageSrc={card.imageSrc}
              altText={card.altText}
              // label={card.label}
              // onClick={card.onClick}
            />
          </Link>
          ))}
        </main>
      </div>
    </div>
  );
};

export default NonCircuitnTech;
