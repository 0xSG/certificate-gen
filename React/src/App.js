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
      page: "1"
    };

    axios
      .get("http://localhost:3007/getproducts")
      .then(result => {
        console.log(result.data);

        this.setState({ products: result.data });
      })
      .catch(err => {});
  }

  getView = () => {
    console.log(this.state.page);
    if (this.state.page == 3) {
      return <Cert />;
    } else if (this.state.page == 2) {
      return <Home />;
    } else {
      return <Auth />;
    }
  };

  getView = this.getView.bind(this);

  render() {
    return this.getView();
  }
}

export default App;
