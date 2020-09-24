import React from "react";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import "./AboutMeCard.css";

export class AboutMeCard extends React.Component {
  render() {
    return (
      <div className="background-aboutme-card col-md-5 col-sm-12">
        <div className="card-general-content">
          <div className="row">
            <div className="col"></div>
            <div className="col-sm-12 col-md-6 my-image">
              <img
                src={require("../../assets/coding_img.png")}
                alt="codingGirl"
              ></img>
            </div>
            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col"></div>
            <div className="col-6">
              <h4 className="my-name">Raquel Mijares</h4>
              <hr className="break-point"></hr>
              <h6 className="my-title">Full Stack Developer</h6>
            </div>
            <div className="col"></div>
          </div>
          <footer className="card-footer">
            <SocialMedia></SocialMedia>
          </footer>
        </div>
      </div>
    );
  }
}
