import React from "react";
import "./MyProjects.css";
import { MyProjectsContent } from "../MyProjectsContent/MyProjectsContent";
import { MyProjectsCard } from "../MyProjectsCard/MyProjectsCard";

export class MyProjects extends React.Component {
  render() {
    return (
      <section className="row background-my-projects">
        <h1 className="project-title">Projects</h1>
        <MyProjectsContent></MyProjectsContent>
        <MyProjectsCard></MyProjectsCard>
      </section>
    );
  }
}
