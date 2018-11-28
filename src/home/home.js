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

    // database.ref(usr.userData.udata.uid + "/name").on("value", snapshot => {
    //   usr.userData.udata.name = snapshot.val();
    //   console.log(usr.userData.udata.name);
    //   this.forceUpdate();
    // });
    //Get the user email address
    AsyncStorage.getItem("email")
      .then(result => {
        new user().userData.udata.email = result;
        this.forceUpdate();
      })
      .catch(err => {});

    AsyncStorage.getItem("uid")
      .then(result => {
        if (result) {
          new user().userData.udata.uid = result;
          // console.log(result);
          database.ref(result + "/").on("value", snapshot => {
            //courses = snapshot.val();

            new user().userData.udata.name = snapshot.val().name;
            console.log(snapshot.val().name);
            var courses = snapshot.val().courses;
            var arr = [];
            for (var course in courses) {
              arr.push(courses[course]);
            }
            this.setState({ courses: arr });

            this.forceUpdate();
          });
        }
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
            <p className=" titl">{new user().userData.udata.name}</p>
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
