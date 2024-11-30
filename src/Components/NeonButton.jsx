import React from "react";
import styled from "styled-components";

const NeonButton = ({ label, onClick }) => {
  return (
    <StyledWrapper>
      <button className="btn" onClick={onClick}>{label}</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn {
  padding: 0.5em 2em; /* Adjust padding for consistent spacing */
  font-size: 1em;
  font-weight: bold;
  border-radius: 25px;
  color: #fff6fb;
  letter-spacing: 0.3em;
  text-shadow: -2px 2px 5px #000000;
  background-color: transparent;
  border: 3px solid #ffffff;
  transition: 100ms;
  cursor: pointer;
  width: 200px; /* Fixed width */
  height: 50px; /* Fixed height */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 
    0 0 10px 2px rgba(28, 181, 224, 0.5),  /* Outward shadow (gradient from blue) */
    0 0 10px 2px rgba(225, 0, 255, 0.5),   /* Outward shadow (gradient to pink) */
    inset 0 0 10px 2px rgba(28, 181, 224, 0.3),  /* Inward shadow (fainter blue) */
    inset 0 0 10px 2px rgba(225, 0, 255, 0.3),   /* Inward shadow (fainter pink) */
    0 0 15px 3px rgba(28, 181, 224, 0.7),   /* Outer gradient border */
    0 0 15px 3px rgba(225, 0, 255, 0.7),    /* Outer gradient border */
    inset 0 0 8px 2px rgba(28, 181, 224, 0.4), /* Inner gradient border */
    inset 0 0 8px 2px rgba(225, 0, 255, 0.4);  /* Inner gradient border */
}

.btn:hover {
  box-shadow:
    0 0 0px 1px #dd00ff, /* Inner border with pink */
    0 0 10px 2px #e600ff, /* Outer pink glow */
    inset 0 0 0px 1px #dd00ff, /* Inner border for inset */
    inset 0 0 30px 2px #e600ff;
  text-shadow: 0 0 10px #e600ff; /* Glowing text effect */
  transform: translateY(-5px);
}

.btn:active {
  box-shadow:
    0 0 0px 1px #dd00ff, /* Inner border with pink */
    0 0 25px 2px #e600ff, /* Stronger outer pink glow */
    inset 0 0 0px 1px #e600ff, /* Inner border */
    inset 0 0 30px 2px #dd00ff; /* Stronger inset pink shadow */
  transform: translateY(1px);
}

/* Responsive design for smaller screens */
@media (max-width: 768px) {
  .btn {
    width: 150px; /* Adjust width for smaller screens */
    height: 40px; /* Adjust height for smaller screens */
    font-size: 0.9em; /* Slightly smaller font size */
    padding: 0.4em 1.5em; /* Adjust padding for better fit */
  }
}

@media (max-width: 480px) {
  .btn {
    width: 120px; /* Adjust width for very small screens */
    height: 35px; /* Adjust height for very small screens */
    font-size: 0.8em; /* Smaller font size */
    padding: 0.3em 1em; /* Adjust padding */
  }
}
`;

export default NeonButton;
