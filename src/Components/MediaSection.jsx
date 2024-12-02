import React from 'react';
import './MediaSection.css'; // Import the CSS file
import fb from "../utils/Img/svg/fb.svg";
import insta from "../utils/Img/svg/instagram.svg";
import linkedIn from "../utils/Img/svg/linkedin.svg";

const MediaSection = () => {
    return (
      <div className="card">
        <p className="text-lg mt-4 md:text-2xl mb-4">Media</p>
        <div className="flex justify-center gap-4">
          <div className="Btn">
            <div className="BG"></div>
            <div className="svgContainer">
              <a
                href="https://www.instagram.com/#/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transform transition-all"
              >
                <img src={insta} alt="Instagram" className="socialSvg" />
              </a>
            </div>
          </div>
          <div className="Btn">
            <div className="BG"></div>
            <div className="svgContainer">
              <a
                href="https://www.linkedin.com/company/#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transform transition-all"
              >
                <img src={linkedIn} alt="LinkedIn" className="socialSvg" />
              </a>
            </div>
          </div>
          <div className="Btn">
            <div className="BG"></div>
            <div className="svgContainer">
              <a
                href="https://www.facebook.com/#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transform transition-all"
              >
                <img src={fb} alt="Facebook" className="socialSvg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default MediaSection;