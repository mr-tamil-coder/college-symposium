import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div className="text-2xl bg-black  text-white">
      <Header />
      {/* mb-20 removed due to the white space */}
      <div className="md:mt-20 mb-20  md:mb-0">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
