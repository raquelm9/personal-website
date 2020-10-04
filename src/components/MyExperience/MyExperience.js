import React from "react";
import { MyExperienceCard } from "../MyExperienceCard/MyExperienceCard";
import "./MyExperience.css";

export class MyExperience extends React.Component {
  constructor(props) {
    super(props);

    this.experience = [
      {
        year: "2020 - Present",
        jobPosition: "Full Stack Developer (Bootcamp)",
        companyName: "EvolveU - Calgary, AB",
        description: (
          <p>
            Full-time programming bootcamp.
            <br />
            <br />
            Focused on coding languages and frameworks such as; Python,
            JavaScript, Flask, Bootstrap, OpenPyXL, HTML/CSS, SQLAlchemy, and
            REACT.js.
            <br />
            <br />
            The course is designed to simulate an agile working environment.
          </p>
        ),
        key: "evolveu",
      },
      {
        year: "2018 - 2020",
        jobPosition: "Project Magager/ Coordinator",
        companyName: "AccessSMT - Calgary, AB",
        description: (
          <p>
            Responsible for the smooth functioning of day to day operations to
            ensure that projects are completed on time and within budget.
            <br />
            <br />
            Key Projects: Calgary Cancer Centre, Hillcrest K-9 School,
            Brookfield Residential YMCA at Seton, Iron Springs- Huntsville
            Replacement K-9 School.
          </p>
        ),
        key: "access_smt",
      },
    ];
  }

  renderExperience(experience) {
    return (
      <MyExperienceCard
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
      <div className="row">
        <div class="offset-md-3"></div>
        <h2>Experience</h2>
        <div className="col-12">
          {this.experience.map(this.renderExperience)}
        </div>
      </div>
    );
  }
}
