import express from "express";
import conn from "../backend/conn/conn";
const app = express();
const auth = require("../models/auth");
const list = require("../models/list"); 
app.use(express.json());

app.use("/api/v1", auth);
app.use("/api/v2", list);

app.listen(1000, ()=> {
    console.log("Server Started");
})







