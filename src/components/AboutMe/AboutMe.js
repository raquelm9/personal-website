import React from "react";
import "./AboutMe.css";
import { AboutMeCard } from "../AboutMeCard/AboutMeCard";
import { AboutMeContent } from "../AboutMeContent/AboutMeContent";

export class AboutMe extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="background-aboutme-card col-md-5 col-sm-12">
          <AboutMeCard></AboutMeCard>
        </div>
        <div className="about-me-content col-lg-4 col-md-6 col-sm-12 offset-md-1">
          <AboutMeContent></AboutMeContent>
        </div>
        <div className="col"></div>
      </div>
    );
  }
}
