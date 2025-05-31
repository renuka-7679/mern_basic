const User = require("../models/user");
const bcrypt = require('bcrypt')


exports.SignUp= async(req,res)=>{
    const {username,password} = req.body;
    const exist = await User.findOne({username})
    if(exist) return res.status(404).json({mesage:"User already Exist"})
    const hashedPassword = await bcrypt.hash(password,10)
    const newUser = new User({username,password:hashedPassword})
    await newUser.save();
    res.status(201).json({
        message:"User Created successfully",
        user:newUser
    })
}


exports.Login= async (req,res)=>{
    const {username,password} = req.body;
    const user = await User.findOne({username})
    if(!user) return res.status(404).json({mesage:"Given username and password is not valid"})
    const match = await bcrypt.compare(password,user.password)
    if(!match) res.status(404).json({message:"Invalid credential"})
    res.status(201).json({
        message:"User Login successfully",
    })
}


