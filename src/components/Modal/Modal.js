import React from "react";
import "./Modal.css";

export class Modal extends React.Component {
  render() {
    return (
      <div
        className="modal fade"
        id="contactMe"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Contact Me
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    {" "}
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
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
