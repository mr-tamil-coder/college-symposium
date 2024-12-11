import React from "react";
import randomColor from "randomcolor";
import "../text.css";
import Card from "./Card";
import Image from "../utils/Img/TechLogo.jpg";
import elo from "../assets/symposium/Paperpresentation.png";
import viz from "../assets/symposium/Vizyourway.jpeg";
import wiz from "../assets/symposium/Wizzup.jpg";
import ghost from "../assets/symposium/GhostOps.jpg";
import RandomEvents from "./RandomEvents";
import { Link } from "react-router-dom";

const NonCircuitTec = () => {
  const color = randomColor();
  const noncircuittec = RandomEvents("Circuit Branch - Technical Events");

  // Events data
  const circuittechnicalEvents = [
    {
      id: 1,
      imageSrc: elo, // Replace with actual image path
      altText: "Eloquence",
      label: "Eloquence",
      path: "/eloquence",
    },
    {
      id: 2,
      imageSrc: wiz,
      altText: "Wizzup",
      label: "Wizzup",
      path: "/wizzup",
    },
    {
      id: 3,
      imageSrc: Image,
      altText: "MatterMind",
      label: "MatterMind",
    },
    {
      id: 4,
      imageSrc: viz,
      altText: "Viz Your Way",
      label: "Viz Your Way",
      path: "/vizyourway",
    },
    {
      id: 5,
      imageSrc: ghost,
      altText: "GhostOps-CTF",
      label: "GhostOps-CTF",
      path: "/ghostops",
    },
    {
      id: 6,
      imageSrc: Image, // Replace with actual image path
      altText: "Code Sprint",
      label: "Code Sprint",
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
            <Link to={card.path} key={card.id}>
              <Card imageSrc={card.imageSrc} altText={card.altText} />
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
};

export default NonCircuitTec;
