import React, { Component } from "react";

import "./home.css";
import user from "../user/data";

class Home extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onBackButtonEvent() {}
  componentWillMount() {}

  componentWillUnmount() {
    new user().userData.pageCode = "2";
  }

  handleSubmit(event) {
    //c1 p

    var usr = new user();

    if (event.target.id == "lo") {
      this.props.onEvent({ pageCode: "1" });
      this.forceUpdate();
    }
    if (event.target.id == "c1p") {
      //alert("cp1");
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();

      usr.udata = {
        cname: "IMAGE PROCESSING AND MACHINE LEARNING",
        date: date + "-" + month + "-" + year,
        uno: "D33J-H872-3545-71A1",
        name: "SURYA GANGARAJ K"
      };
      this.props.onEvent({ pageCode: "3" });
    }

    //c1 g
    else if (event.target.id == "c1g") {
      //alert("cg1");
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();

      usr.udata = {
        cname: "IMAGE PROCESSING AND MACHINE LEARNING",
        date: date + "-" + month + "-" + year,
        uno: "D33J-H872-3545-71A1",
        name: "SURYA GANGARAJ K"
      };
      this.props.onEvent({ pageCode: "3" });
    }

    //c2 p
    else if (event.target.id == "c2p") {
      //alert("cp2");
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();

      usr.udata = {
        cname: "FULL STACK WEB DEVELOPMENT",
        date: date + "-" + month + "-" + year,
        uno: "D33J-H872-3545-71A1",
        name: "SURYA GANGARAJ K"
      };
      this.props.onEvent({ pageCode: "3" });
    }

    //c2 g
    else if (event.target.id == "c2g") {
      //alert("cg2");
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();

      usr.udata = {
        cname: "FULL STACK WEB DEVELOPMENT",
        date: date + "-" + month + "-" + year,
        uno: "D33J-H872-3545-71A1",
        name: "SURYA GANGARAJ K"
      };
      this.props.onEvent({ pageCode: "3" });
    }
  }

  render() {
    return (
      <div className="home">
        <div className=" jumbotron text-center shadow bg-dark text-white header">
          <div>Certificate Generation Home</div>
        </div>

        <div className=" container row">
          <div className=" card col-6 shadow-lg">
            <img
              src={"https://picsum.photos/200/300/?random"}
              alt="John"
              className=" myimg"
            />
            <p className=" titl">{new user().name}</p>
            <button
              onClick={this.handleSubmit}
              id={"lo"}
              className=" btn-primary rounded"
            >
              <span class="glyphicon glyphicon-log-out" /> Log out
            </button>
          </div>
          <div className="  col-6">
            <div className="  row">
              <div className=" card shadow-lg">
                <h1>John Doe</h1>
                <p className=" titl">IMAGE PROCESSING AND MACHINE LEARNING</p>

                <div className=" row">
                  <div className=" col-6">
                    <button
                      onClick={this.handleSubmit}
                      id={"c1p"}
                      className=" btn-primary rounded"
                    >
                      Print
                    </button>
                  </div>
                  <div className=" col-6">
                    <button
                      onClick={this.handleSubmit}
                      id={"c1g"}
                      className=" btn-success rounded"
                    >
                      Generate
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="home  row">
              <div className="home card shadow-lg">
                <h1>John Doe</h1>
                <p className="home titl">FULL STACK WEB DEVELOPMENT</p>

                <div className="home row">
                  <div className="home col-6">
                    <button
                      onClick={this.handleSubmit}
                      id={"c2p"}
                      className="home btn-primary rounded"
                    >
                      Print
                    </button>
                  </div>
                  <div className="home col-6">
                    <button
                      onClick={this.handleSubmit}
                      id={"c2g"}
                      className="home btn-success rounded"
                    >
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
