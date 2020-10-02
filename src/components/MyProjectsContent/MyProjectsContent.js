import React from "react";
import "./MyProjectsContent.css";

export class MyProjectsContent extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col"></div>
        <div className="col-sm-12 col-md-8 col-lg-5">
          <p className="project-content">
            <p>
              I love to build things, nothing makes me more proud than looking
              at the final result (maybe that's why I studied engineering{" "}
              <strong>lol</strong>). Programming has given me the opportunity to
              built, be curious and creative, and not feel bad about learning
              with trial and error. Below you will see some of my first
              projects, <strong>Enjoy!</strong>
            </p>
          </p>
        </div>
        <div className="col"></div>
      </div>
    );
  }
}
