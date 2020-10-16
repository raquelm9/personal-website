import React from "react";
import "./GoTop.css";

export class GoTop extends React.Component {
  constructor(props) {
    super(props);
    this.topFunction = this.topFunction.bind(this);
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <>
        <button
          className="fas fa-chevron-circle-up arrow-top"
          onClick={this.topFunction}
          id="myBtn"
          title="Go to top"
        ></button>
      </>
    );
  }
}
