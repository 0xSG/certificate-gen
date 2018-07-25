import React, { Component } from "react";
import "./auth.css";
class Auth extends Component {
  state = {};
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
            placeholder="Email id"
            className="inp"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="inp"
          />
          <input
            type="submit"
            name="submit"
            placeholder=""
            className="sbtn inp btn-primary"
          />
        </div>
      </div>
    );
  }
}

export default Auth;
