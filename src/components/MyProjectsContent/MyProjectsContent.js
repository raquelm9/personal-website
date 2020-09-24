import React from "react";
import "./MyProjectsContent.css";

export class MyProjectsContent extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col"></div>
        <div className="col-sm-12 col-md-6">
          <p className="project-content">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
        <div className="col"></div>
      </div>
    );
  }
}
