import React from "react";
import "./card.css"; // Link to the CSS file
import NeonButton from "./NeonButton";

const Card = ({ imageSrc, altText, label, onClick }) => {
  return (
    <div className="card">
      <a onClick={onClick}>
        <div className="wrapper">
          <img src={imageSrc} alt={altText} className="cover-image" />
        </div>
      </a>
      <div className="cardButton absolute">
        <NeonButton label={label} onClick={onClick} />
      </div>
    </div>
  );
};

export default Card;
