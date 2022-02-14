// import mongoDB module
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const projectRoutes = require("./routes/projectRoutes");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8080;

// connecting string to mongoDB
const dbURI =
  "mongodb+srv://rifanandrian:BatagorKuah123@cluster0.p41n3.mongodb.net/proj-mng?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(function (result) {
    console.log("Database is connected");
  })
  .catch((err) => console.log(err));

// apply cors policy
app.use(cors());

// bodyParser.json(options) => parser the text as json and exposes the resulting objects on the req body
app.use(bodyParser.json());

// projec route
app.use("/projects", projectRoutes);

// "hello from homapage" is shown when visiting http://localhost:8080/
app.get("/", (req, res) => res.send("Hello from home page."));

// assign the port to our app
app.listen(PORT, () =>
  console.log(`Server running  on port: http://localhost:${PORT}/`)
);
