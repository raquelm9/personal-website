import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar.js";
import { AboutMeCard } from "./components/AboutMeCard/AboutMeCard";
import { AboutMeContent } from "./components/AboutMeContent/AboutMeContent";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7 col-sm-12">
            <AboutMeCard></AboutMeCard>
          </div>
          <div className="col-md-4 col-sm-12">
            <AboutMeContent></AboutMeContent>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
