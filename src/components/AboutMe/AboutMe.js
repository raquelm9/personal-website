import React from "react";
import "./AboutMe.css";
import { AboutMeCard } from "../AboutMeCard/AboutMeCard";
import { AboutMeContent } from "../AboutMeContent/AboutMeContent";

export class AboutMe extends React.Component {
  render() {
    return (
      <section className="row">
        <AboutMeCard></AboutMeCard>
        <AboutMeContent></AboutMeContent>
      </section>
    );
  }
}
