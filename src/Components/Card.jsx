import React from "react";
import "./Card.css"; // Link to the CSS file
import NeonButton from "./NeonButton";
const Card = () => {
  return (
    <main className="card-container gap-7 relative flex flex-wrap justify-center w-full ">
      {/* Card 1 */}
      <div className="card  ">
        <a
         onClick={() => alert("Circuit clicked")}
        >
          <div className="wrapper">
            <img
              src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
              alt="Dark Rider Cover"
              className="cover-image"
            />
          </div>
       
       
        </a>
        <div className="cardButton absolute">
        <NeonButton label="CIRCUIT" onClick={() => alert("Circuit clicked")} />
        </div>
      </div>

      {/* Card 2 */}
      <div className="card">
        <a
         onClick={() => alert("nonCircuit clicked")}
        >
          <div className="wrapper">
            <img
              src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg"
              alt="Force Mage Cover"
              className="cover-image"
            />
          </div>
         
        </a>
        <button className="cardButton absolute bottom-0">
        <NeonButton label="CSE/IT" onClick={() => alert("nonCircuit clicked")} />
        </button>
      </div>
    </main>
  );
};

export default Card;
