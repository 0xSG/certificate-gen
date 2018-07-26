import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <div className=" jumbotron text-center shadow bg-dark text-white header">
          <div>Certificate Generation Home</div>
        </div>

        <div className=" container row">
          <div className=" card col-6">
            <img
              src={"https://picsum.photos/200/300/?random"}
              alt="John"
              className=" myimg"
            />
            <h1>John Doe</h1>
            <p className=" titl">my name here</p>
          </div>
          <div className="  col-6">
            <div className="  row">
              <div className=" card">
                <h1>John Doe</h1>
                <p className=" titl">IMAGE PROCESSING AND MACHINE LEARNING</p>
                <p>Harvard University</p>
                <div className=" row">
                  <div className=" col-6">
                    <button className=" btn-primary rounded">Print</button>
                  </div>
                  <div className=" col-6">
                    <button className=" btn-success rounded">Generate</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="home  row">
              <div className="home card">
                <h1>John Doe</h1>
                <p className="home titl">FULL STACK WEB DEVELOPMENT</p>
                <p>Harvard University</p>
                <div className="home row">
                  <div className="home col-6">
                    <button className="home btn-primary rounded">Print</button>
                  </div>
                  <div className="home col-6">
                    <button className="home btn-success rounded">
                      Generate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
