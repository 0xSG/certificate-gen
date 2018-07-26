import React, { Component } from "react";
import "./auth.css";

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
    //Check the password and user name
    //if true get the data
    //send the data to event
    alert(usr.userData.password + ":" + usr.userData.email);
    axios
      .post("http://localhost:3008/auth", {
        email: usr.userData.email,
        password: usr.userData.password
      })
      .then(result => {
        this.props.onEvent(result.data);
        this.setState({ products: result.data });
      })
      .catch(err => {});
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

/*
  if the user email and password is correct then the person obj is send to the app. with pageCode:2

  TODO
  have to include data base api
*/
