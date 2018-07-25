import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>Certificate Generation Home</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-6 bg-primary">hi</div>
            <div className="col-sm-6 bg-info">heloo</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
