import React from "react";
import "./Recommendation.css";
import { RecommendationContainer } from "../RecommendationContainer/RecommendationContainer";

export class Recommendation extends React.Component {
  render() {
    return (
      <section className="row background-my-recommendation">
        <div className="col-12">
          <h1 className="recommendation-title">Testimonials</h1>
          <RecommendationContainer></RecommendationContainer>
        </div>
      </section>
    );
  }
}
