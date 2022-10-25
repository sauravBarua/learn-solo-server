const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const programmings = require("./data/programmings.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/programmings", (req, res) => {
  res.send(programmings);
});

app.get("/programmings/:id", (req, res) => {
  const id = req.params.id;
  const selectedProgrammings = programmings.find((p) => p._id === id);
  res.send(selectedProgrammings);
  //   console.log(req.params.id);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
