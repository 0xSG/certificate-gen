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

app.listen(3007, () => {
  console.log("its running..");
});

var db = firebase.database();

db.ref("users/").set({
  name: "sgk",
  uid: "dasfasd",
  cour: [
    {
      coid: "dfsf",
      cname: "full stack",
      c_date:
        "Date :" +
        new Date().getDate() +
        ":" +
        new Date().getMonth() +
        ":" +
        new Date().getFullYear()
    }
  ],
  email: "susus@dfs.cd",
  password: "sgk"
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

app.post("/auth", (req, res) => {
  var data = req.body;
  if (Object.keys(data).length == 0) {
    res
      .status(500)
      .send({ error: "internal error occured. please try again." });
  } else
    db.ref("users/").on(
      "value",
      function(snapshot) {
        var result = snapshot.val();
        if (result.email === data.email && result.password === data.password) {
          res.status(200).send({
            msg: "Authenticated",
            page_code: "3",
            person_obj: result
          }); // authenticated
        } else res.status(500).send({ error: "Authentication error." });
      },
      function(errorObject) {
        res.send("The read failed: " + errorObject.code);
      }
    );
});
