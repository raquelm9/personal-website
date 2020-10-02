import React from "react";
import "./MySkillsAndLanguages.css";

export class MySkillsAndLanguages extends React.Component {
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
                  <p>Entrepreneurial Mindset</p>
                  <p>Teamwork & Collaboration</p>
                  <p>Go-to-Market Planning</p>
                  <p>Digital Analytics</p>
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
