import React, { Component } from "react";
import "./App.css";
import Home from "./home/home";
import Auth from "./auth/auth";
import Cert from "./cert/cert";
import user from "./user/data";

const axios = require("axios");
var nu;
class App extends Component {
  constructor(props) {
    nu = new user();

    super(props);
    this.state = {};
    this.onEventHander = this.onEventHander.bind(this);
  }
  onEventHander(event) {
    nu.userData.pageCode = event.pageCode;
    this.forceUpdate();
  }

  getView = () => {
    alert(nu.userData.pageCode);
    if (nu.userData.pageCode == "3") {
      return <Cert onEvent={this.onEventHander} />; //3
    } else if (nu.userData.pageCode == "2") {
      return <Home onEvent={this.onEventHander} />; //2
    } else {
      return <Auth onEvent={this.onEventHander} />; //1
    }
  };

  getView = this.getView.bind(this);

  render() {
    return this.getView();
  }
}

export default App;
