import React, { Component } from "react";
import { AsyncStorage } from "AsyncStorage";
import "./home.css";
import user from "../user/data";
import Courses from "../courses/courses";
import * as firebase from "firebase";
//import { database } from "../../../Node/node_modules/firebase";
var usr;
var config;
var database;
const axios = require("axios");
class Home extends Component {
  state = {};

  constructor(props) {
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
    database = firebase.database();
    this.state = {
      courses: []
    };
    usr = new user();
    this.handleSubmit = this.handleSubmit.bind(this);

    axios
      .get("http://localhost:3008/getDetails")
      .then(result => {
        this.state.courses = result.data;
        //alert(result.data);
      })
      .catch(err => {});

    database.ref("courses/").on("value", snapshot => {
      //courses = snapshot.val();
      var courses = snapshot.val();
      var arr = [];
      for (var course in courses) {
        arr.push(courses[course]);
      }
      this.setState({ courses: arr });
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    new user().userData.pageCode = "2";
  }

  handleSubmit(event) {
    if (event.target != undefined && event.target.id == "lo") {
      this.props.onEvent({ pageCode: "1" });
      this.forceUpdate();
      AsyncStorage.setItem("pageCode", "1");
    } else this.props.onEvent(event);
  }

  render() {
    return (
      <div className="home">
        <div className=" jumbotron text-center shadow bg-dark text-white header">
          <div>Certificate Generation Home</div>
        </div>

        <div className=" container  row">
          <div className="  card col-6 shadow-lg">
            <img
              src={"https://picsum.photos/200/300/?random"}
              alt="John"
              className=" myimg"
            />
            <p className=" titl">{new user().userData.udata.name}</p>
            <button
              onClick={this.handleSubmit}
              id={"lo"}
              className=" btn-warning "
            >
              <span class="glyphicon glyphicon-log-out" /> Log out
            </button>
          </div>
          <div className="  col-6">
            {this.state.courses.map(cour => {
              return <Courses title={cour} onEvent={this.handleSubmit} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
