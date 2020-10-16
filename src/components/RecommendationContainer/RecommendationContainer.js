import React from "react";
import { Recommendations } from "../RecommendationCarousel/RecommendationCarousel";

export class RecommendationContainer extends React.Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col"></div>
          <div className="col-sm-12 col-md-6">
            <Recommendations></Recommendations>
          </div>
          <div className="col"></div>
        </div>
      </>
    );
  }
}
