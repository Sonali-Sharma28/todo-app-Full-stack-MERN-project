import { type } from "express/lib/response";
import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },  
    user: [{
        type: mongoose.Types.ObjectId,
        ref: "List"
    }]  
},{timestamps:true});

module.exports = mongoose.model("List",listSchema);