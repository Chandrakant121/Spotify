//npm init -y
//npm i express mongoose
//npm start
// npm i cors 

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());


app.use(express.json());


const { register, login } = require("./controllers/auth.controller");

app.post("/register", register);
app.post("/login", login);



module.exports = app;
