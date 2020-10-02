import React from "react";
import { MyEducationCardBlueprint } from "../MyEducationCardBlueprint/MyEducationCardBlueprint";
import "./MyEducationCard.css";

export class MyEducationCard extends React.Component {
  constructor(props) {
    super(props);

    this.education = [
      {
        year: "Project 1",
        jobPosition: "ABC",
        companyName: "ABC",
        description: "abc",
        key: "0",
      },
      {
        year: "Project 1",
        jobPosition: "ABC",
        companyName: "ABC",
        description: "abc",
        key: "0",
      },
    ];
  }

  renderEducationCard(education) {
    return (
      <MyEducationCardBlueprint
        key={education.key}
        year={education.year}
        jobPosition={education.jobPosition}
        companyName={education.companyName}
        description={education.description}
      />
    );
  }

  render() {
    return (
      <>
        <h1>Education</h1>
        <div className="row">
          <div className="col-12">
            {this.education.map(this.renderEducationCard)}
          </div>
        </div>
      </>
    );
  }
}
