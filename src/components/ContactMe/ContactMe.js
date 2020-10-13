import React from "react";
import "./ContactMe.css";

export class ContactMe extends React.Component {
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-warning btn-sm button-contactme"
          data-toggle="modal"
          data-target="#contactMe"
        >
          Contact Me
        </button>
      </div>
    );
  }
}
