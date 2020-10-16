import React from "react";
import { ResumeContent } from "../ResumeContent/ResumeContent";
import "./ResumeCard.css";
import { SkillsAndLanguages } from "../SkillsAndLanguages/SkillsAndLanguages";
import "animate.css";
import handleViewport from "react-in-viewport";

class ResumeCardComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  containerClasses() {
    let regularClass =
      "card-blueprint " + this.props.className + " col-sm-10 col-md-6 col-lg-5";
    if (this.props.inViewport) {
      regularClass += " animate__animated animate__pulse";
    }

    return regularClass;
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col"></div>
            <div className={this.containerClasses()}>
              <div className="row">
                <div className="resume-year-container col-lg-5 col-md-12">
                  <p className="resume-year">{this.props.year}</p>
                  <p className="resume-position">{this.props.position}</p>
                  <p className="resume-instName">{this.props.instName}</p>
                </div>
                <div className="resume-description-container col-lg-7 col-md-12">
                  <p className="resume-description">{this.props.description}</p>
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

export const ResumeCard = handleViewport(ResumeCardComponent, {
  rootMargin: "-1.0px",
});
