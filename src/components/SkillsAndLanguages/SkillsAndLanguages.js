import React from "react";
import "./SkillsAndLanguages.css";

export class SkillsAndLanguages extends React.Component {
  render() {
    return (
      <div className="row skills-languages-container">
        <div className="col"></div>
        <div className="skills-languages-card col-sm-10 col-md-6 col-lg-5">
          <div className="row">
            <div className="skill-name-description col-12">
              <p className="resume-title-skill-language">
                Professional skillset
              </p>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <p className="skill-language-list">
                    <i className="fas fa-square square-icon"></i>
                    Problem-solver
                  </p>
                  <p className="skill-language-list">
                    <i className="fas fa-square square-icon"></i>Critical
                    thinking
                  </p>
                </div>
                <div className="col-md-6 col-sm-12">
                  <p className="skill-language-list">
                    <i className="fas fa-square square-icon"></i>Creativity
                  </p>
                  <p className="skill-language-list">
                    <i className="fas fa-square square-icon"></i>Cognitive
                    flexibility
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="language-name-description col-12">
              <p className="resume-title-skill-language">Languages</p>
              <p className="skill-language-list">
                <i className="fas fa-square square-icon"></i>Spanish
              </p>
              <p className="skill-language-list">
                <i className="fas fa-square square-icon"></i>English
              </p>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    );
  }
}
