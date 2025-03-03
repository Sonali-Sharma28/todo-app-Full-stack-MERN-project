const router = require("express").Router();
const User = require("../models/user"); 
const List = require("../models/list"); 


//createTask
router.post("/addTask", async(req, res) => {
    try{
        const { title, body, email } = req.body;
        const existingUser = await User.findOne({ email});
        if(existingUser){
            const list = new List( {title, body, user: existingUser});
            await list.save().then(() => res.status(200).json({list}));
            existingUser.list.push(list);
            existingUser.save();
        }
    } catch(error){
        console.log(error);
    }
}); 

//updateTask
router.put("/updateTask/:id", async(req, res) => {
    try{
        const { title, body, email } = req.body;
        const existingUser = await User.findOne({ email});
        if(existingUser){
            const list = await User.findByIdAndUpdate(req.params.id, { title, body });
            await list.save().then(() => res.status(200).json({message: "Task Updated"}));
        }
    } catch(error){
        console.log(error);
    }
}); 

//deleteTask
router.delete("/deleteTask/:id", async(req, res) => {
    try{
        const { title, body, email } = req.body;
        const existingUser = await User.findOneAndUpdate(
            { email}, { $pull: {list: req.params.id}}
        );
        if(existingUser){
             await List.findByIdAndDelete(req.params.id)
            .then(() => res.status(200).json({message: "Task Deleted"}));
        }
    } catch(error){
        console.log(error);
    }
}); 

//getTask
router.get("/getTask/:id", async(req, res) =>{
    const list = await List.find({user: req.params.is}).sort({createdAt: -1});
    if(list.length !==0){
        res.status(200).json({list : list})
    }
    else{
        res.status(200).json({"message":"No Tasks"})
    }
});

module.exports = router;