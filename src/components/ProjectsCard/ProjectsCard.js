import React from "react";
import { ProjectsCardBlueprint } from "../ProjectsCardBlueprint/ProjectsCardBlueprint";
import "./ProjectsCard.css";
import TicTacToe from "../../assets/ttt_img.png";
import GreatestCommonDivisor from "../../assets/gcd_img.png";
import Drink from "../../assets/drink_img.png";

export class ProjectsCard extends React.Component {
  constructor(props) {
    super(props);

    this.projects = [
      {
        title: "Happy Times",
        description:
          "Full-Stack App that shows restaurant's happy hours in Calgary. Mongo, Express, React, Node, Formik, Leaflet, REST API, Users: Client and Admin.",
        image: Drink,
        link: "https://loving-lumiere-9af642.netlify.app/",
        key: "0",
      },
      {
        title: "Tic Tac Toe Game",
        description:
          "This project was a great learning experience since I was able to start working with 2D arrays, functions, variables, input, output, conditionals and loops. Also, It was very important for me to create the game mobile friendly",
        image: TicTacToe,
        link: "https://confident-hypatia-d72d00.netlify.app/",
        key: "1",
      },
      {
        title: "Greatest Common Divisor Calculator",
        description:
          "I was challenged to automate this math problem. I used many functions that connect to each other, providing the final result as an output. For decoration I used bootstrap.",
        image: GreatestCommonDivisor,
        link: "https://nervous-johnson-97852b.netlify.app/",
        key: "2",
      },
    ];
  }

  renderProjectCard(project) {
    return (
      <ProjectsCardBlueprint
        key={project.key}
        title={project.title}
        description={project.description}
        image={project.image}
        link={project.link}
      />
    );
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          {this.projects.map(this.renderProjectCard)}
        </div>
      </div>
    );
  }
}
