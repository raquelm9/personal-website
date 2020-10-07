import React from "react";
import "./ContactMeForm.css";

export class ContactMeForm extends React.Component {
  render() {
    return (
      <div className="modalFormWrapper">
        <form>
          <div className="form-group">
            <label for="formName">Name</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder=""
            ></input>
          </div>
          <div className="form-group">
            <label for="formEmail">Email Address</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder=""
            ></input>
          </div>
          <div className="form-group">
            <label for="formMessage">Message</label>
            <input
              type="text"
              className="form-control form-message"
              id="formGroupExampleInput2"
              placeholder=""
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
