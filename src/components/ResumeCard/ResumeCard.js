import React from "react";
import { ResumeContent } from "../ResumeContent/ResumeContent";
import "./ResumeCard.css";

export class ResumeCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col"></div>
            <div className="card-blueprint col-sm-11 col-md-6 col-lg-5">
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
