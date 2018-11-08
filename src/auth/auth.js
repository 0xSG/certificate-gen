import React, { Component } from "react";
import "./auth.css";
import { AsyncStorage } from "AsyncStorage";
import * as firebase from "firebase";
import user from "../user/data";

var usr;
class Auth extends Component {
  state = { info: " " };

  constructor(props) {
    super(props);
    this.state = { status: " " };

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
    firebase
      .auth()
      .signInWithEmailAndPassword(usr.userData.email, usr.userData.password)
      .then(data => {
        var result = { data: { pageCode: "2" } };
        this.props.onEvent(result.data);
        this.setState({ products: result.data });
        console.log(result);
        //TODO save email and pagecode
        AsyncStorage.setItem("email", firebase.auth().currentUser.email);
        AsyncStorage.setItem("pageCode", "2");
        if (result.data.pageCode != "2") alert("incorrect email or password");
      })
      .catch(err => {
        AsyncStorage.setItem("pageCode", "1");
        alert("incorrect email or password");
      });
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
          {/* <div className="status-txt" value={this.state.status} /> */}
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
