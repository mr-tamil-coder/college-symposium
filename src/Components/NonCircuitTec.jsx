import React from "react";
import randomColor from "randomcolor";
import "../text.css";
import Card from "./Card";
import Image from "../utils/Img/TechLogo.jpg";
import elo from "../assets/symposium/Paperpresentation.png";
import viz from "../assets/symposium/Vizyourway.jpeg";
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
      // onClick: () => alert("Eloquence clicked"),
    },
    {
      id: 2,
      imageSrc: Image, // Replace with actual image path
      altText: "Wizzup",
      label: "Wizzup",
      path: "/wizzup",
      // onClick: () => alert("Wizzup clicked"),
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
      imageSrc: viz, // Replace with actual image path
      altText: "Viz Your Way",
      label: "Viz Your Way",
      path: "/vizyourway",
      // onClick: () => alert("Viz Your Way clicked"),
    },
    {
      id: 5,
      imageSrc: ghost, // Replace with actual image path
      altText: "GhostOps-CTF",
      label: "GhostOps-CTF",
      path: "/ghostops",
      // onClick: () => alert("GhostOps-CTF clicked"),
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
            // card.id === 1 ? (
              <Link to={card.path} key={card.id}>
                <Card
                  imageSrc={card.imageSrc}
                  altText={card.altText}
                  // label={card.label}
                  // onClick={card.onClick}
                />
              </Link>
            // ) : (
            //   <Card
            //     key={card.id}
            //     imageSrc={card.imageSrc}
            //     altText={card.altText}
            //     label={card.label}
            //     onClick={card.onClick}
            //   />
            // )
          ))}
        </main>
      </div>
    </div>
  );
};

export default NonCircuitTec;
