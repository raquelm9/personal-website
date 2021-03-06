import React from "react";
import "./SocialMedia.css";

export class SocialMedia extends React.Component {
  render() {
    return (
      <div className="social-media-container">
        <a href="mailto: raquemjrs2@gmail.com" target="blank">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/raquelmjrs/" target="blank">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/raquelm9" target="blank">
          <i className="fab fa-github"></i>
        </a>
      </div>
    );
  }
}
