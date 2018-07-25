import React, { Component } from "react";
import "./auth.css";
class Auth extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    //vardocument.getElementById('email').value,
    alert("A name was submitted: " + this.state.email);
    event.preventDefault();
  }

  render() {
    return (
      <div className="box ">
        <img className="img_bg" src={"./login_bg.jpg"} />
        <div className="title text-center text-white">
          Certificate Generation
        </div>
        <form className="form " onSubmit={this.handleSubmit}>
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
          <input type="submit" name="submit" className="sbtn inp btn-primary" />
        </form>
      </div>
    );
  }
}

export default Auth;
