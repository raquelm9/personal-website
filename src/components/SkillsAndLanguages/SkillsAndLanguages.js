import React from "react";
import "./SkillsAndLanguages.css";

export class SkillsAndLanguages extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col"></div>
            <div className="skills-languages-card col-sm-12 col-md-6">
              <div className="row">
                <div className="skill-name-description col-md-5 col-sm-12">
                  <h2>Professional skillset</h2>
                  <p>Problem-solver</p>
                  <p>Critical thinking</p>
                  <p>Creativity</p>
                  <p>Cognitive flexibility</p>
                </div>
              </div>
              <div className="row">
                <div className="language-name-description col-md-5 col-sm-12">
                  <h2>Languages</h2>
                  <p>Spanish</p>
                  <p>English</p>
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    );
  }
}
