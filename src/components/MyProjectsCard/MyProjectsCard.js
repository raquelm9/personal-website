import React from "react";
import { MyProjectsCardBlueprint } from "../MyProjectsCardBlueprint/MyProjectsCardBlueprint";
import "./MyProjectsCard.css";
import TicTacToe from "../../assets/ttt_img.png";
import GreatestCommonDivisor from "../../assets/gcd_img.png";

export class MyProjectsCard extends React.Component {
  constructor(props) {
    super(props);

    this.projects = [
      {
        title: "Tic Tac Toe Game",
        description:
          "This project was a great learning experience since I was able to start working with 2D arrays, functions, variables, input, output, conditionals and loops. Also, It was very important for me to create the game mobile friendly",
        image: TicTacToe,
        link: "https://confident-hypatia-d72d00.netlify.app/",
        key: "0",
      },
      {
        title: "Greatest Common Divisor Calculator",
        description:
          "I was challenged to automate this math problem. I used many functions that connect to each other, providing the final result as the output. For decoration I used bootstrap.",
        image: GreatestCommonDivisor,
        link: "https://nervous-johnson-97852b.netlify.app/",
        key: "1",
      },
    ];
  }

  renderProjectCard(project) {
    return (
      <MyProjectsCardBlueprint
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
