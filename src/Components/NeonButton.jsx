import React from "react";
import styled from "styled-components";

const NeonButton = ({ label, onClick }) => {
  return (
    <StyledWrapper>
      <button className="button" onClick={onClick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {label}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* Fixed size Neon Button */
  .button {
    cursor: pointer;
    position: relative;
    width: 200px; /* Fixed width */
    height: 60px; /* Fixed height */
    text-decoration: none;
    border: none;
    color: #fff;
    font-size: 1.2em;
    font-weight: bold;
    text-transform: uppercase;
    font-family: sans-serif;
    letter-spacing: 4px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .button:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
  }
  .button::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transition: 0.5s;
    transition-delay: 0.5s;
  }
  .button:hover:after {
    left: 100%;
  }
  .button span {
    position: absolute;
    display: block;
    transition: 0.5s ease;
  }
  .button span:nth-child(1) {
    top: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: #fff;
  }
  .button:hover span:nth-child(1) {
    width: 100%;
    transform: translateX(100%);
  }
  .button span:nth-child(2) {
    top: 0;
    left: 0;
    width: 1px;
    height: 0;
    background: #fff;
  }
  .button:hover span:nth-child(2) {
    height: 100%;
    transform: translateY(100%);
  }
  .button span:nth-child(3) {
    bottom: 0;
    right: 0;
    width: 0;
    height: 1px;
    background: #fff;
  }
  .button:hover span:nth-child(3) {
    width: 100%;
    transform: translateX(-100%);
  }
  .button span:nth-child(4) {
    bottom: 0;
    right: 0;
    width: 1px;
    height: 0;
    background: #fff;
  }
  .button:hover span:nth-child(4) {
    height: 100%;
    transform: translateY(-100%);
  }
`;

export default NeonButton;
