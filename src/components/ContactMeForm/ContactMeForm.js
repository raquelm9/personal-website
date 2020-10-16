import React from "react";
import "./ContactMeForm.css";
import emailjs from "emailjs-com";

export class ContactMeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formSent: false,
      formFailed: false,
    };

    this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g48yuik",
        "template_b7ys78m",
        e.target,
        "user_AJtO9YW0aE06kQpFYUmrF"
      )
      .then(
        (result) => {
          this.setState({ formSent: true });
        },
        (error) => {
          this.setState({ formFailed: true });
        }
      );

    e.target.reset();
  }

  renderFailure() {
    return (
      <div className="email-not-sent">
        <i className="fas fa-times"> Failed to send email</i>
        <p>Please try again later.</p>
      </div>
    );
  }

  renderSuccess() {
    return (
      <div className="email-sent">
        <i className="fas fa-check"> Email sent</i>
        <p>Thank you for reaching out to me!</p>
      </div>
    );
  }

  renderForm() {
    return (
      <div>
        <div className="container">
          <form onSubmit={this.sendEmail}>
            <div className="row pt-5 mx-auto">
              <div className="col-10 form-group mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="col-10 form-group pt-2 mx-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                />
              </div>
              <div className="col-10 form-group pt-2 mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div className="col-10 form-group pt-2 mx-auto">
                <textarea
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Your message"
                  name="message"
                />
              </div>
              <div className="col-10 pt-3 mx-auto">
                <input
                  type="submit"
                  className="btn btn-warning button-modal"
                  value="Send Message"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

  render() {
    if (this.state.formSent) {
      return this.renderSuccess();
    } else if (this.state.formFailed) {
      return this.renderFailure();
    } else {
      return this.renderForm();
    }
  }
}
