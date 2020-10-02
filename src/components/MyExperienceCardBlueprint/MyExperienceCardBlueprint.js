import React from "react";
import "./MyExperienceCardBlueprint.css";

export class MyExperienceCardBlueprint extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col"></div>
        <div className="experience-card-blueprint col-sm-12 col-md-6">
          <div className="row">
            <div className="experience-name-description col-md-5 col-sm-12">
              <p>{this.props.year}</p>
              <p>{this.props.jobPosition}</p>
              <p>{this.props.companyName}</p>
            </div>
            <div className="experience-name-description col-md-7 col-sm-12">
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    );
  }
}
