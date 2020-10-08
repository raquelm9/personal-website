import React from "react";
import "./ProjectsCardBlueprint.css";

export class ProjectsCardBlueprint extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col"></div>
        <div className="project-card-blueprint col-sm-10 col-md-6 col-lg-5">
          <div className="row">
            <div className="project-name-description col-lg-7 col-md-12">
              <p className="projects-title">{this.props.title}</p>
              <p className="project-description">{this.props.description}</p>
              <div className="link-container">
                <a
                  class="btn btn-primary button-project"
                  href={this.props.link}
                  target="_blank"
                  role="button"
                >
                  Check it out
                </a>
              </div>
            </div>
            <div
              className="project-image col-lg-5 col-md-12"
              style={{ backgroundImage: `url(${this.props.image})` }}
            ></div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    );
  }
}
