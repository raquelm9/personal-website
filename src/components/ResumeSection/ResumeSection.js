import React from "react";
import "./ResumeSection.css";

export class ResumeSection extends React.Component {
  render() {
    return (
      <div>
        <div className="offset-md-3">
          <p className="resume-content-title">{this.props.title}</p>
        </div>
        {this.props.children}
      </div>
    );
  }
}
