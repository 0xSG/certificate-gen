import React, { Component } from "react";
import "./cert.css";

class Cert extends Component {
  state = {};
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
          <div className="d">IMAGE PROCESSING AND MACHINE LEARNING</div>
        </div>
        <div className="t3">
          <div className="d">THIS IS TO CERTIFY THAT</div>
        </div>
        <div className="t4 ">
          <div>Name of the person</div>
        </div>
        <div className="t5">
          <div className="d">
            Has successfully completed and undergone an Internship program
            offered <br /> <b>by Saarthi Career</b>
          </div>
        </div>
        <div className="t6">
          <div>Date:</div>
        </div>
        <div className="t7">
          <div>Khushboo Murarka, Director Your Career Navigator Pvt Ltd</div>
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
