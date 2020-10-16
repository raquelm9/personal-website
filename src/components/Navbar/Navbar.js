import React from "react";
import "./Navbar.css";

export class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light navbar-background">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand font-italic font-weight-light" href="#">
          RM
        </a>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#about-me">
              ABOUT ME <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#projects">
              PROJECTS
            </a>
            <a className="nav-item nav-link" href="#resume">
              RESUME
            </a>
            <a className="nav-item nav-link" href="#contact">
              CONTACT
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
