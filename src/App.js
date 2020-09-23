import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar.js";
import { AboutMeCard } from "./components/AboutMeCard/AboutMeCard";
import { AboutMeContent } from "./components/AboutMeContent/AboutMeContent";
import { AboutMe } from "./components/AboutMe/AboutMe";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container-fluid">
        <AboutMe></AboutMe>
      </div>
    </>
  );
}

export default App;
