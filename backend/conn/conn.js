import mongoose from "mongoose";

const conn = async(req,res) =>{
    try{
        await mongoose.connect("mongoose connect link")
        .then(() =>
            {console.log("DB Connected")});
    }catch(error){
        res.status(400).json({message:"DB not connected"});
    }
    
};

conn();