const mongoose = require("mongoose");

const mongoDBURL =
  "mongodb+srv://Zhi:343334547@cluster0.jafna5m.mongodb.net/mern-eShop";

mongoose.connect(mongoDBURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

let dbconnect = mongoose.connection;

dbconnect.on("error", () => {
  console.log("Mango DB connection failed ");
});

dbconnect.on("connected", () => {
  console.log("Mongo DB connection Successfully");
});

module.exports = mongoose;
