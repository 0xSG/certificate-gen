import React, { Component } from "react";
import "./courses.css";
import user from "../user/data";
import { AsyncStorage } from "AsyncStorage";

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    var usr = new user();
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    usr.userData.udata.date = date + "-" + month + "-" + year;

    usr.userData.udata.cname = this.props.title;
    this.props.onEvent({ pageCode: "3" });
  }

  render() {
    return (
      <div className="  ">
        <div className=" card shadow-lg">
          <p className=" titl">{this.props.title}</p>

          <button
            onClick={this.handleSubmit}
            id={"c2p"}
            className=" btn-warning "
          >
            Generate
          </button>
        </div>
      </div>
    );
  }
}

export default Courses;
