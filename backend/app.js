const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const showController = require("./controllers/showController");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/shows", showController);

app.get("/", (req, res) => {
  res.send("Welcome to Binge-SlackTime App");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found!");
});

module.exports = app;
