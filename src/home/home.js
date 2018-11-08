import React, { Component } from "react";
import { AsyncStorage } from "AsyncStorage";
import "./home.css";
import user from "../user/data";
import Courses from "../courses/courses";
import * as firebase from "firebase";

var usr;

var database;

class Home extends Component {
  state = {};

  constructor(props) {
    super(props);

    database = firebase.database();
    this.state = {
      courses: []
    };
    usr = new user();
    this.handleSubmit = this.handleSubmit.bind(this);

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
    //Get the user email address
    AsyncStorage.getItem("email")
      .then(result => {
        new user().userData.udata.email = result;
        this.forceUpdate();
      })
      .catch(err => {});
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
            <p className=" titl">{new user().userData.udata.email}</p>
            <button
              onClick={this.handleSubmit}
              id={"lo"}
              className=" btn-warning "
            >
              <span class="glyphicon glyphicon-log-out" /> Sign out
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
