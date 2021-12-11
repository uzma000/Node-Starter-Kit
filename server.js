const express = require("express");
const app = express();
app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.get("/chocolate", function (req, res) {
  const value1 = req.query.value1;
  const value2 = req.query.value2;
  res.send("chocolate amount is " + value1 + "color is " + value2);
});
app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
