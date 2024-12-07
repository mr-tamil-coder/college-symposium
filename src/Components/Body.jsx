import React, { useState, useEffect } from "react";
import CollegeName from "./CollegeName";
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
import EventButton from "./EventButton";
import EventCardDesign from "./EventCardDesign";
import Card from "./Card";
import MediaSection from "./MediaSection";
import ContactUs from "./ContactUs";
import LocateMap from "./LocateMap";
import 'animate.css';
import { Link } from "react-router-dom";

const Body = () => {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 2 seconds
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />; // Display loader while loading is true
  }

  return (
    <div>
      <CollegeName />
      <div className="flex flex-wrap justify-center gap-5 my-5 animate__animated animate__fadeInUp">
        <Link to="/events/circuit">
              <EventButton label="Explore"/>
        </Link>
        {/* <Link to="/events/circuit">
          <NeonButton label="Track I" tooltip={"AIDS/AIML/CS/CSE/CSBS/IT"} />
        </Link>
        <Link to="/events/non-circuit">
          <NeonButton label="Track II" tooltip={"BME/CE/ECE/EEE/MBA"} />
        </Link> */}
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
