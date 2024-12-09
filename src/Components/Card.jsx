import React from "react";
import "./card.css"; // Link to the CSS file
import EventButton from "./EventButton";

const Card = ({ imageSrc, altText, label, onClick }) => {
  return (
    <div className="card">
      <a onClick={onClick}>
        <div className="wrapper">
          <img src={imageSrc} alt={altText} />
        </div>
      </a>
      {/* <div className="cardButton absolute">
        <EventButton label={label} onClick={onClick} />
      </div> */}
    </div>
  );
};

export default Card;
