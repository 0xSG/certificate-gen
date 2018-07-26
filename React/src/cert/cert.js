import React, { Component } from "react";
import "./cert.css";
import "./../user/data";
import user from "./../user/data";

var usr;
class Cert extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {};
    usr = new user();
    console.log(usr);
    this.myFunction = this.myFunction.bind(this);
  }

  myFunction() {
    window.print();
  }

  componentWillMount() {
    window.setTimeout(this.myFunction, 1000);
  }
  render() {
    return (
      <div className="card text-dark m-4 ">
        <img src={"./Certif.png"} alt="Snow" className="make-a-4" />
        <div className="t1">
          <div className="d">
            CERTIFICATE OF <br />ACHIEVEMENT
          </div>
        </div>
        <div className="t2">
          <div className="d">{new user().udata.cname}</div>
        </div>
        <div className="t3">
          <div className="d">THIS IS TO CERTIFY THAT</div>
        </div>
        <div className="t4 ">
          <div>{new user().udata.name}</div>
        </div>
        <div className="t5">
          <div className="d">
            Has successfully completed and undergone an Internship program
            offered <br /> <b>by Saarthi Career</b>
          </div>
        </div>
        <div className="t6">
          <div>
            Date:{new user().udata.date}
            <br />
            {new user().udata.uno}
          </div>
        </div>
        <div className="t7">
          <div>
            Khushboo Murarka, Director <br /> Your Career Navigator Pvt Ltd
          </div>
        </div>
      </div>
    );
  }
}

export default Cert;

// <img src={"./Certif.png"} alt="Snow" className="m-0" />
//         <div className="bottom-left">Bottom Left</div>
//         <div className="top-left">Top Left</div>
//         <div className="top-right">Top Right</div>
//         <div className="bottom-right">Bottom Right</div>
//         <div className="centered text-dark font-weight-bold ">
//           <h1>Name of the person</h1>
//         </div>
