import express from "express";
import conn from "../backend/conn/conn";
const app = express();
const auth = 
app.use(express.json());

app.use("/api/v1", auth);
app.listen(1000, ()=> {
    console.log("Server Started");
})







