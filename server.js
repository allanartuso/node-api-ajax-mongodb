const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//App setup
const app = express();
const server = http.Server(app);
server.listen(3000);

//connect mongoDB
mongoose.connect(
  "mongodb+srv://node-shop:" +
    process.env.MONGO_ATLAS_PW +
    "@node-rest-shop-ccioe.mongodb.net/test?retryWrites=true",
  {
    useNewUrlParser: true
  }
);

//Json parser
app.use(bodyParser.json());

//Api
const productRoutes = require("./api/routes/products"); //module.exports
app.use("/products", productRoutes);

//Static files
app.use("/public", express.static("public"));
app.use(express.static("views"));
