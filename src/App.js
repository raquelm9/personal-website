import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar.js";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Projects } from "./components/Projects/Projects";
import { Resume } from "./components/Resume/Resume";
import { Footer } from "./components/Footer/Footer";
import { Modal } from "./components/Modal/Modal";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container-fluid">
        <AboutMe></AboutMe>
        <Projects></Projects>
        <Resume></Resume>
      </div>
      <Footer></Footer>
      <Modal></Modal>
    </>
  );
}

export default App;
