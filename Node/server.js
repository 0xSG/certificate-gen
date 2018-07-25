var express = require("express");
var bp = require("body-parser");
var app = express();
app.use(bp.json());

app.get("/cert/:id", (req, res) => {
  var id = req.params.id;
  res.status(200).send("id: " + id);
});

app.listen(3004, () => {
  console.log("its running..");
});
