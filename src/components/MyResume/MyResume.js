import React from "react";
import "./MyResume.css";
import { MyExperienceCard } from "../MyExperienceCard/MyExperienceCard";
import { MyEducationCard } from "../MyEducationCard/MyEducationCard";
import { MySkillsAndLanguages } from "../MySkillsAndLanguages/MySkillsAndLanguages";

export class MyResume extends React.Component {
  render() {
    return (
      <section className="row background-my-resume">
        <div className="col-12">
          <h1 className="resume-title">Resume</h1>
          <MyExperienceCard></MyExperienceCard>
          <MyEducationCard></MyEducationCard>
          <MySkillsAndLanguages></MySkillsAndLanguages>
        </div>
      </section>
    );
  }
}
