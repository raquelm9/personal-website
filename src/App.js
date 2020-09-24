import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar.js";
import { AboutMeCard } from "./components/AboutMeCard/AboutMeCard";
import { AboutMeContent } from "./components/AboutMeContent/AboutMeContent";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { MyProjects } from "./components/MyProjects/MyProjects";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container-fluid">
        <AboutMe></AboutMe>
        <MyProjects></MyProjects>
      </div>
    </>
  );
}

export default App;
