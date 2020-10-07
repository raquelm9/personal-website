import React from "react";
import "./Projects.css";
import { ProjectsContent } from "../ProjectsContent/ProjectsContent";
import { ProjectsCard } from "../ProjectsCard/ProjectsCard";

export class Projects extends React.Component {
  render() {
    return (
      <section className="row background-my-projects" id="projects">
        <div className="col-12">
          <h1 className="project-title">Projects</h1>
          <ProjectsContent></ProjectsContent>
          <ProjectsCard></ProjectsCard>
        </div>
      </section>
    );
  }
}
