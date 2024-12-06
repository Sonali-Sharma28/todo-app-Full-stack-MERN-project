import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    }, 
    password: {
        type: String,
        require: true,
        unique: true
    },
    list: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }]  
},
{timestamps:true});

module.exports = mongoose.model("User",userSchema);