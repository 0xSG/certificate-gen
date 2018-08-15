import React, { Component } from "react";
import "./App.css";
import Home from "./home/home";
import Auth from "./auth/auth";
import Cert from "./cert/cert";
import user from "./user/data";
import * as firebase from "firebase";
import { AsyncStorage } from "AsyncStorage";
var config;
var nu;
class App extends Component {
  constructor(props) {
    nu = new user();

    super(props);
    config = {
      apiKey: "AIzaSyDd1nOUq16xjTVQ300G9Sqfg2c-bbq8ttU",
      authDomain: "certificate-5448e.firebaseapp.com",
      databaseURL: "https://certificate-5448e.firebaseio.com",
      projectId: "certificate-5448e",
      storageBucket: "certificate-5448e.appspot.com",
      messagingSenderId: "361973650141"
    };
    firebase.initializeApp(config);
    this.state = {
      udata: new user().userData.udata
    };

    AsyncStorage.getItem("pageCode")
      .then(result => {
        if (nu.userData.pageCode != result) {
          nu.userData.pageCode = result;
          this.forceUpdate();
        }
      })
      .catch(err => {});

    this.onEventHander = this.onEventHander.bind(this);
  }

  onEventHander(event) {
    nu.userData.pageCode = event.pageCode;
    this.forceUpdate();
  }

  getView = () => {
    if (nu.userData.pageCode == "3") {
      return <Cert onEvent={this.onEventHander} udata={this.setState.udata} />; //3
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
