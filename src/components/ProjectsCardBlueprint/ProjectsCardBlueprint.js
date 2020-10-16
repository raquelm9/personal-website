import React from "react";
import "./ProjectsCardBlueprint.css";
import "animate.css";
import handleViewport from "react-in-viewport";

class ProjectsCardBlueprintComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  containerClasses() {
    let regularClass = "project-card-blueprint col-sm-10 col-md-6 col-lg-5";

    if (this.props.inViewport) {
      regularClass += " animate__animated animate__pulse";
    }

    return regularClass;
  }

  render() {
    return (
      <div className="row">
        <div className="col"></div>
        <div className={this.containerClasses()}>
          <div className="row">
            <div
              className="project-image col-lg-5 col-md-12"
              style={{ backgroundImage: `url(${this.props.image})` }}
            ></div>
            <div className="project-name-description col-lg-7 col-md-12">
              <p className="projects-title">{this.props.title}</p>
              <p className="project-description">{this.props.description}</p>
              <div className="link-container">
                <a
                  className="btn btn-warning button-project"
                  href={this.props.link}
                  target="_blank"
                  role="button"
                >
                  Check it out
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    );
  }
}

export const ProjectsCardBlueprint = handleViewport(
  ProjectsCardBlueprintComponent,
  { rootMargin: "-1.0px" }
);
