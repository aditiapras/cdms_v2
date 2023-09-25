const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const endpoint = require("./endpoint/index.js");

app.use(cors());
app.use(bodyParser.json());

app.get("/drums", (req, res) => {
  const method = "GET";
  const route = "drums";
  endpoint(req, res, method, route);
});

app.put("/drums", (req, res) => {
  const method = "PUT";
  const route = "drums";
  endpoint(req, res, method, route);
});

app.put("/drums/cleaning", (req, res) => {
  const method = "PUT";
  const route = "drums/cleaning";
  endpoint(req, res, method, route);
});

app.get("/machines", (req, res) => {
  const method = "GET";
  const route = "machines";
  endpoint(req, res, method, route);
});

app.post("/machines", (req, res) => {
  const method = "POST";
  const route = "machines";
  endpoint(req, res, method, route);
});

app.get("/monitoring", (req, res) => {
  const method = "GET";
  const route = "monitoring";
  endpoint(req, res, method, route);
});

app.put("/monitoring", (req, res) => {
  const method = "PUT";
  const route = "monitoring";
  endpoint(req, res, method, route);
});

app.post("/monitoring", (req, res) => {
  const method = "POST";
  const route = "monitoring";
  endpoint(req, res, method, route);
});

app.get("/cleaning", (req, res) => {
  const method = "GET";
  const route = "cleaning";
  endpoint(req, res, method, route);
});

app.post("/cleaning", (req, res) => {
  const method = "POST";
  const route = "cleaning";
  endpoint(req, res, method, route);
});

app.get("/tubs", (req, res) => {
  const method = "GET";
  const route = "tubs";
  endpoint(req, res, method, route);
});

app.get("/histories", (req, res) => {
  const method = "GET";
  const route = "histories";
  endpoint(req, res, method, route);
});

app.post("/histories", (req, res) => {
  const method = "POST";
  const route = "histories";
  endpoint(req, res, method, route);
});

app.listen(4000, () => {
  console.log("Server start on port 4000");
});
