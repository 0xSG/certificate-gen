import React, { Component } from "react";
import { AsyncStorage } from "AsyncStorage";
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
      AsyncStorage.setItem("pageCode", "1");
    }
    if (event.target.id == "c1p") {
      //alert("cp1");
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();

      usr.userData.udata.cname = "IMAGE PROCESSING AND MACHINE LEARNING";
      this.props.onEvent({ pageCode: "3" });
    }

    //c1 g
    else if (event.target.id == "c1g") {
      //alert("cg1");
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();

      usr.userData.udata.cname = "IMAGE PROCESSING AND MACHINE LEARNING";
      this.props.onEvent({ pageCode: "3" });
    }

    //c2 p
    else if (event.target.id == "c2p") {
      //alert("cp2");
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();

      usr.userData.udata.cname = "FULL STACK WEB DEVELOPMENT";
      this.props.onEvent({ pageCode: "3" });
    }

    //c2 g
    else if (event.target.id == "c2g") {
      //alert("cg2");
      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();

      usr.userData.udata.cname = "FULL STACK WEB DEVELOPMENT";
      this.props.onEvent({ pageCode: "3" });
    }
  }

  render() {
    return (
      <div className="home">
        <div className=" jumbotron text-center shadow bg-dark text-white header">
          <div>Certificate Generation Home</div>
        </div>

        <div className=" container  row">
          <div className="  card col-6 shadow-lg">
            <img
              src={"https://picsum.photos/200/300/?random"}
              alt="John"
              className=" myimg"
            />
            <p className=" titl">{new user().userData.udata.name}</p>
            <button
              onClick={this.handleSubmit}
              id={"lo"}
              className=" btn-warning "
            >
              <span class="glyphicon glyphicon-log-out" /> Log out
            </button>
          </div>
          <div className="  col-6">
            <div className="  ">
              <div className=" card shadow-lg">
                <p className=" titl">IMAGE PROCESSING AND MACHINE LEARNING</p>

                <button
                  onClick={this.handleSubmit}
                  id={"c1p"}
                  className=" btn-warning "
                >
                  Print
                </button>
              </div>
            </div>
            <div className="  ">
              <div className=" card shadow-lg">
                <p className=" titl">FULL STACK WEB DEVELOPMENT</p>

                <button
                  onClick={this.handleSubmit}
                  id={"c2p"}
                  className=" btn-warning "
                >
                  Print
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
