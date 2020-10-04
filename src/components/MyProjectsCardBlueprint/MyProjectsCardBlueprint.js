import React from "react";
import "./MyProjectsCardBlueprint.css";

export class MyProjectsCardBlueprint extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col"></div>
        <div className="project-card-blueprint col-sm-11 col-md-6 col-lg-5">
          <div className="row">
            <div className="project-name-description col-lg-7 col-md-12">
              <p className="projects-title">{this.props.title}</p>
              <p className="project-description">{this.props.description}</p>
              <div className="link-container">
                <a
                  class="btn btn-primary text-center"
                  href={this.props.link}
                  target="_blank"
                  role="button"
                >
                  Link
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