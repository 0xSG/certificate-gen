import React, { Component } from "react";
import "./App.css";
import Home from "./home/home";
import Auth from "./auth/auth";
import Cert from "./cert/cert";

const axios = require("axios");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page_code: "1"
    };

    axios
      .post("http://localhost:3007/auth", {
        name: "sgk",
        email: "susus@dfs.cd",
        password: "sgk"
      })
      .then(result => {
        console.log("363");

        this.setState(result);
      })
      .catch(err => {});
  }

  getView = () => {
    if (this.state.page_code == 3) {
      return <Cert />; //3
    } else if (this.state.page_code == 2) {
      return <Home />; //2
    } else {
      return <Auth />; //1
    }
  };

  getView = this.getView.bind(this);

  render() {
    return this.getView();
  }
}

export default App;
