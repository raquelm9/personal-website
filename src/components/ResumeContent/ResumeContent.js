import React from "react";
import { ResumeCard } from "../ResumeCard/ResumeCard";
import { ResumeSection } from "../ResumeSection/ResumeSection";
import "./ResumeContent.css";

export class ResumeContent extends React.Component {
  constructor(props) {
    super(props);

    this.experience = [
      {
        year: "2020 - Present",
        position: "Full Stack Developer (Bootcamp)",
        instName: "EvolveU - Calgary, AB",
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
        position: "Project Magager/ Coordinator",
        instName: "AccessSMT - Calgary, AB",
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

    this.education = [
      {
        year: "2019 - 2015",
        position: "Bachelor of Science in Engineering",
        instName: "Metropolitan University - Caracas, Venezuela",
        description: (
          <p>
            My specialization is in Production Engineering.
            <br />
            <br />
            Production Engineering applied in the search for solutions to
            technological problems that improve current practices. Aware of the
            need to understand the new challenges of technology, its application
            in our society and the environment.
          </p>
        ),
        key: "metropolitan-university",
      },
      {
        year: "2020 - 2020",
        position: "Beginner Full Stack Web Development",
        instName: "Devslopes & Udemy",
        description: (
          <p>
            Introductory course in the area of web development.
            <br />
            <br />
            Subjects covered: HTML, CSS, Javascript, Git, Bootstrap, Flexbox,
            Sass, Node, Mongo, REST APIs, and React.
            <br />
            <br />
            The course also explained how computers work, binary, Heap vs Stack,
            hexadecimal and storage capacity.
          </p>
        ),
        key: "devslopes-udemy",
      },
    ];
  }

  renderInformation(information) {
    return (
      <ResumeCard
        key={information.key}
        year={information.year}
        position={information.position}
        instName={information.instName}
        description={information.description}
      />
    );
  }

  render() {
    return (
      <>
        <ResumeSection title="Experience">
          {this.experience.map(this.renderInformation)}
        </ResumeSection>
        <ResumeSection title="Education">
          {this.education.map(this.renderInformation)}
        </ResumeSection>
      </>
    );
  }
}
