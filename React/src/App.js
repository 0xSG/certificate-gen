import React, { Component } from "react";
import "./App.css";
import Home from "./home/home";
import Auth from "./auth/auth";
import Cert from "./cert/cert";

class App extends Component {
  render() {
    return <Auth />;
  }
}

export default App;
