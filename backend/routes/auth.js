const router = require("express").Router();
const User = require("../models/user");

//SIGN IN
router.post("/register",async(req,res) =>{
    try{
        const {username,email,password} = req.body;
        const hashpassword = bcrypt.hashSync(password);
        const user = new User({username, email,password: hashpassword});
        user.save().then (() => {
            res.status(200).json({user:user});
        });
    }catch(error){
        res.status(400).json({message: "User already exists"});
    }
});

//SIGN UP
router.post("/signin", async (req,res) => {
    try{
       const user = await User.findOne({email:req.body.email});
       if(!user){
        res.status(400).json({message: "Please signup first"});
       }
       const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
       if(!isPasswordCorrect){
        res.status(400).json({message: "Password Incorrect"});
       }
       const{ password, ...others} = user._doc;
       res.status(200).json({others});
    }catch(error){
        res.status(400).json({message: "Please enter correct details"});
    }
});


module.exports = router;