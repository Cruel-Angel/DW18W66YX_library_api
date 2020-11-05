//import express module
const express = require("express");

const cors = require("cors");
//import env file
require("dotenv").config();
//use express in app variable
const app = express();

const router = require("./src/routes/router");

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
/*app.use("/Library_Project/avatars", express.static("Library_Project/avatars"));
app.use("/Library_Project/files", express.static("Library_Project/files"));
app.use(
  "/Library_Project/thumbnails",
  express.static("Library_Project/thumbnails")
);*/
app.use("/api/v1/", router);

//define the server port

app.get("/", (req, res) => {
  res.send("BACKEND LIBRARY Rizky Iqbal");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
