import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar.js";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { MyProjects } from "./components/MyProjects/MyProjects";
import { MyResume } from "./components/MyResume/MyResume";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container-fluid">
        <AboutMe></AboutMe>
        <MyProjects></MyProjects>
        <MyResume></MyResume>
      </div>
    </>
  );
}

export default App;
