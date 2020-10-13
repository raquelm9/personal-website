import React from "react";
import "./Footer.css";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import { ContactMe } from "../ContactMe/ContactMe";

export class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-webpage" id="contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col-5 col-sm-6 col-md-4 col-lg-2 contact-me-footer">
              <div class="vertical-center">
                <ContactMe />
              </div>
            </div>
            <div className="col-7 col-sm-6 col-md-4 col-lg-2 write-footer">
              <p className="footer-title">Write</p>
              <p className="footer-email">raquelmjrs2@gmail.com</p>
            </div>
            <div className="col-12 col-md-4 col-lg-2 follow-footer">
              <p className="footer-title">Follow</p>
              <div class="horizontal-center">
                <SocialMedia />
              </div>
            </div>
            <div className="col"></div>
            <div className="col-12 col-lg-3 info-footer">
              <p className="footer-info">© 2020 by Raquel Mijares.</p>
              <p className="footer-info">
                Created with React<i className="fab fa-react"></i>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
