//npm init -y
//npm i express mongoose
//npm start
// npm i cors 

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());


app.use(express.json());



module.exports = app;
