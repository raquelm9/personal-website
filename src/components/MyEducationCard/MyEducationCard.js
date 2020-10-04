import React from "react";
import { MyEducationCardBlueprint } from "../MyEducationCardBlueprint/MyEducationCardBlueprint";
import "./MyEducationCard.css";

export class MyEducationCard extends React.Component {
  constructor(props) {
    super(props);

    this.education = [
      {
        year: "2019 - 2015",
        educationPosition: "Bachelor of Science in Engineering",
        educationName: "Metropolitan University - Caracas, Venezuela",
        description: (
          <p>
            My specialization is in Production Engineering.
            <br />
            <br />
            Production applied in the search for solutions to technological
            problems that improve current practices. Aware of the need to
            understand the new challenges of technology, its application in our
            society and the environment
          </p>
        ),
        key: "0",
      },
      {
        year: "2020",
        educationPosition: "Beginner Full Stack Web Development",
        educationName:
          "Devslopes & Udemy https://www.udemy.com/course/ultimate-web/",
        description: (
          <p>
            Introductory course in the area of web development
            <br />
            <br />
            Subjects covered: HTML, CSS, Javascript, Git, Bootstrap, Flexbox,
            Sass, Node, Mongo, REST APIs, and React.
            <br />
            <br />
            The course also explained how computers work, binary, Heap vs Stack,
            hexadecimal and storage capacity
          </p>
        ),
        key: "0",
      },
    ];
  }

  renderEducationCard(education) {
    return (
      <MyEducationCardBlueprint
        key={education.key}
        year={education.year}
        educationPosition={education.educationPosition}
        educationName={education.educationName}
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
