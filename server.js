const bodyParser = require("body-parser");
const express = require("express");

const app = express();

const dbconnection = require("./db");
const productsRoute = require("./routes/productsRoute");

//parsing incoming json data from the req body
app.use(bodyParser.json());
app.use("/api/products", productsRoute);

app.get("/", (req, res) => {
  res.send(" this is back end ");
});

const port = 8000;

app.listen(port, () => console.log("NODE"));
