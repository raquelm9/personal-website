import React from "react";
import "./MyResume.css";
import { MyExperience } from "../MyExperience/MyExperience";
import { MyEducation } from "../MyEducation/MyEducation";
import { MySkillsAndLanguages } from "../MySkillsAndLanguages/MySkillsAndLanguages";

export class MyResume extends React.Component {
  render() {
    return (
      <section className="row background-my-resume">
        <div className="col-12">
          <h1 className="resume-title">Resume</h1>
          <MyExperience></MyExperience>
          <MyEducation></MyEducation>
          <MySkillsAndLanguages></MySkillsAndLanguages>
        </div>
      </section>
    );
  }
}
