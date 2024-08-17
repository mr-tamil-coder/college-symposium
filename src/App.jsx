import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div className="text-2xl bg-black min-h-screen text-white">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
