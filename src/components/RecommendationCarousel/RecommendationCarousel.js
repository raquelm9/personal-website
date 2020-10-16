import React from "react";
import "./RecommendationCarousel.css";
import { recommendations } from "./recommendations";

export class Recommendations extends React.Component {
  itemClass(itemIndex) {
    let classes = "carousel-item";

    if (itemIndex === 0) {
      classes += " active";
    }

    return classes;
  }

  renderItem(name, position, message, idx) {
    return (
      <div className={this.itemClass(idx)} key={`recommendation=${idx}`}>
        <div className="professional-profile">
          <h2>{name}</h2>
          <h3>{position}</h3>
        </div>
        <p className="recommendation-message">{message}</p>
      </div>
    );
  }

  render() {
    return (
      <div
        id="carouselExampleControls"
        className="carousel slide recommendation-carousel"
        data-ride="carousel"
      >
        <div className="carousel-inner" role="listbox">
          {recommendations.map((recommendation, idx) =>
            this.renderItem(
              recommendation.name,
              recommendation.position,
              recommendation.message,
              idx
            )
          )}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <i className="fas fa-chevron-left"></i>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <i className="fas fa-chevron-right"></i>
        </a>
      </div>
    );
  }
}
