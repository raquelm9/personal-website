import React from "react";
import { MyExperienceCardBlueprint } from "../MyExperienceCardBlueprint/MyExperienceCardBlueprint";
import "./MyExperienceCard.css";

export class MyExperienceCard extends React.Component {
  constructor(props) {
    super(props);

    this.experience = [
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

  renderExperienceCard(experience) {
    return (
      <MyExperienceCardBlueprint
        key={experience.key}
        year={experience.year}
        jobPosition={experience.jobPosition}
        companyName={experience.companyName}
        description={experience.description}
      />
    );
  }

  render() {
    return (
      <>
        <h1>Experience</h1>
        <div className="row">
          <div className="col-12">
            {this.experience.map(this.renderExperienceCard)}
          </div>
        </div>
      </>
    );
  }
}
