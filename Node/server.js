var express = require("express");
var body_parser = require("body-parser");
var app = express();
app.use(body_parser.json());
var firebase = require("firebase");

var config = {
  apiKey: "AIzaSyDd1nOUq16xjTVQ300G9Sqfg2c-bbq8ttU",
  authDomain: "certificate-5448e.firebaseapp.com",
  databaseURL: "https://certificate-5448e.firebaseio.com",
  projectId: "certificate-5448e",
  storageBucket: "certificate-5448e.appspot.com",
  messagingSenderId: "361973650141"
};
firebase.initializeApp(config);
var db = firebase.database();

app.all("/*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.listen(3008, () => {
  console.log("its running..");
});

app.post("/auth", (req, res) => {
  var body = req.body;
  console.log("auth");
  firebase
    .auth()
    .signInWithEmailAndPassword(body.email, body.password)
    .then(data => {
      res.status(200).send({ pageCode: "2" });
    })
    .catch(err => {
      res.status(200).send({ pageCode: "1" });
    });
});
var courses;
db.ref("courses/").on("child_changed", snapshot => {
  console.log(snapshot.val());
  courses = snapshot.val();
});
db.ref("courses/").on("value", snapshot => {
  console.log(snapshot.val());
  courses = snapshot.val();
});
app.get("/getDetails", (req, res) => {
  var arr = [];
  for (var course in courses) {
    arr.push(courses[course]);
  }
  res.status(200).send(arr);
});

app.get("/cert/:id", (req, res) => {
  // for gettings certificate
  var id = req.params.id;

  db.on(
    "users/" + id,
    function(snapshot) {
      res.send(snapshot.val());
    },
    function(errorObject) {
      res.send("The read failed: " + errorObject.code);
    }
  );

  res.status(200).send("id: " + id);
});
