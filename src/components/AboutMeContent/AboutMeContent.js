import React from "react";
import "./AboutMeContent.css";

export class AboutMeContent extends React.Component {
  render() {
    return (
      <>
        <div className="about-me-content col-lg-4 col-md-6 col-sm-12 offset-md-1">
          <h1 className="about-me-hello">Hello</h1>
          <h2 className="about-me-welcome">Welcome to my webpage</h2>
          <p className="about-me-content-text">
            My name is Raquel, I am part of Cohort 5 at EvolveU, a Full Stack
            development program. I currently live in beautiful Calgary, Alberta.
            If you have an awesome idea and need help with web development,
            contact me. I would love to hear it.
            <br></br>
            <br></br>
            <b>BTW, Expect a lot of smiles from me :)</b>
          </p>
        </div>
        <div className="col"></div>
      </>
    );
  }
}
