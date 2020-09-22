import React from "react";
import "./SocialMedia.css";

export class SocialMedia extends React.Component {
  render() {
    return (
      <div className="social-media-container">
        <i class="fas fa-envelope"></i>
        <i class="fab fa-linkedin-in"></i>
        <i class="fab fa-github"></i>
      </div>
    );
  }
}
