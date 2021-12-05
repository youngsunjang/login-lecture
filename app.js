"use strict";

// Module
const express = require("express");
const app = express();

const PORT = 3000;

// Routing
const home = require("./routes/home");

// Application Setting
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); // use : a method registering middlewares

module.exports = app;