import React, { useState, useEffect } from "react";
import CollegeName from "./CollegeName"
import Loading from "./Loading"; // Import the loader
import Faq from "./Faq";
import NewAbout from "./NewAbout";
import CountdownTimer from "./CountDown";
import Footer from "./Footer";
import Highlight from "./Highlight";
import TeamCarousel from "./TeamCarousel";
import InfoSections from "./InfoSections";
import HomeEventDetails from "./HomeEventDetails";
import NeonButton from "./NeonButton";
import EventCardDesign from "./EventCardDesign";
import Card from "./Card";
import MediaSection from "./MediaSection";
import ContactUs from "./ContactUs";
import LocateMap from "./LocateMap";
import 'animate.css';

const Body = () => {
  const [loading, setLoading] = useState(true);  // State to control loader visibility

  useEffect(() => {
    // Set loader timeout to 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);  // Hide loader after 2 seconds
    }, 2500);
    
    // Cleanup timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />; // Display loader while loading is true
  }

  return (
    <div>
      <CollegeName/>
      <div className="flex flex-wrap justify-center gap-5 my-5 animate__animated animate__fadeInUp">
        <NeonButton label="Track I" onClick={() => alert("Circuit clicked")} tooltip={"AIDS/AIML/CS/CSE/CSBS/IT"} />
        <NeonButton label="Track II" onClick={() => alert("Non Circuit clicked")} tooltip={"BME/CE/ECE/EEE/MBA"} />
      </div>

      
      <CountdownTimer />
      <hr className="border-t-2 border-gray-400 w-3/4 mx-auto my-10" />
      <NewAbout />
      <hr className="border-t-2 border-gray-400 w-3/4 mx-auto my-10" />
      {/* <HomeEventDetails />
      <InfoSections />
      <TeamCarousel /> */}
      <Faq />
      {/* <MediaSection />
      <ContactUs />
      <LocateMap /> */}
      <Footer />
    </div>
  );
};

export default Body;
