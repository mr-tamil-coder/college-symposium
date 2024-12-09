import React from "react";
import randomColor from "randomcolor";
import { Link } from "react-router-dom";
import "../text.css";
import Card from "./Card";
import Image from '../utils/Img/TechLogo.jpg';
import paperpresentation from "../assets/EventPosters/PaperPresentation.png";
import RandomEvents from "./RandomEvents";

const NonCircuitTec = () => {
    const color = randomColor();
    const noncircuittec = RandomEvents("Circuit Branch - Technical Events");
    const circuittechnicalEvents = [
      {
        id: 1,
        imageSrc: paperpresentation,
        altText: "Eloquence",
        label: "Eloquence",
        path: "/eloquence",
        // onClick: () => alert("Eloquence clicked"),
      },
      {
        id: 2,
        imageSrc: Image,
        altText: "Wizzup",
        label: "Wizzup",
        path: "/description",
        // onClick: () => alert("Wizzup clicked"),
      },
      {
        id: 3,
        imageSrc: Image,
        altText: "MatterMind",
        label: "MatterMind",
        path: "/description",
        // onClick: () => alert("MatterMind clicked"),
      },
      {
        id: 4,
        imageSrc: Image, // Replace with actual image path
        altText: "Viz Your Way",
        label: "Viz Your Way",
        path: "/description",
        // onClick: () => alert("Viz Your Way clicked"),
      },
      {
        id: 5,
        imageSrc: Image, // Replace with actual image path
        altText: "GhostOps-CTF",
        label: "GhostOps-CTF",
        path: "/description",
        // onClick: () => alert("GhostOps-CTF clicked"),
      },
      {
        id: 6,
        imageSrc: Image, // Replace with actual image path
        altText: "Code Sprint",
        label: "Code Sprint",
        path: "/description",
        // onClick: () => alert("Code Sprint clicked"),
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
              <Link key={card.id} to={card.path}>
              <Card
                imageSrc={card.imageSrc}
                altText={card.altText}
              />
            </Link>
            ))}
          </main>
        </div>
      </div>
    );
}

export default NonCircuitTec