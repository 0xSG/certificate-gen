import React, { Component } from "react";
import "./auth.css";
import { resolve } from "url";
import { rejects } from "assert";
import user from "../user/data";
const axios = require("axios");
var usr;
class Auth extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {};

    usr = new user();
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEmailChange(event) {
    //this.setState({ email: event.target.value });
    usr.userData.email = event.target.value;
  }
  handlePasswordChange(event) {
    //this.setState({ password: event.target.value });
    usr.userData.password = event.target.value;
  }

  handleSubmit(event) {
    var u = new user();
    // //alert(u.userData.email + ":" + u.userData.password);
    // u.userData.pageCode = 2;

    this.props.onEvent({ pageCode: 2 });

    event.preventDefault();
  }

  render() {
    return (
      <div className="box ">
        <img className="img_bg" src={"./login_bg.jpg"} />
        <div className="title text-center text-white">
          Certificate Generation
        </div>
        <div className="form ">
          <div className="text-center text-white mh">Login</div>
          <input
            type="emal"
            name="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            placeholder="Email id"
            className="inp"
          />
          <input
            type="password"
            name="password"
            onChange={this.handlePasswordChange}
            value={this.state.password}
            placeholder="Password"
            className="inp"
          />
          <input
            type="submit"
            onClick={this.handleSubmit}
            name="submit"
            className="sbtn inp btn-primary"
          />
        </div>
      </div>
    );
  }
}

export default Auth;
