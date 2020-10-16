import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar.js";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Projects } from "./components/Projects/Projects";
import { Resume } from "./components/Resume/Resume";
import { Recommendation } from "./components/Recommendation/Recommendation";
import { Footer } from "./components/Footer/Footer";
import { Modal } from "./components/Modal/Modal";
import { GoTop } from "./components/GoTop/GoTop";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container-fluid background-main-content">
        <AboutMe></AboutMe>
        <Projects></Projects>
        <Resume></Resume>
        <Recommendation></Recommendation>
      </div>
      <Footer></Footer>
      <GoTop></GoTop>
      <Modal></Modal>
    </>
  );
}

export default App;
