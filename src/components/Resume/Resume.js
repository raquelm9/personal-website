import React from "react";
import "./Resume.css";
import {
  ResumeCardContent,
  ResumeContent,
} from "../ResumeContent/ResumeContent";
import { SkillsAndLanguages } from "../SkillsAndLanguages/SkillsAndLanguages";
import { ResumeSection } from "../ResumeSection/ResumeSection";

export class Resume extends React.Component {
  render() {
    return (
      <section className="row background-my-resume">
        <div className="col-12">
          <h1 className="resume-title">Resume</h1>
          <ResumeContent />
          <SkillsAndLanguages />
        </div>
      </section>
    );
  }
}
