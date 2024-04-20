const User = require('../models/userModel');
const bcrypt = require('bcrypt');
module.exports.index = (req,res)=>{
    res.render('index',{
        title:"Home page",
        developer:"Developed by: Er. Anoop Maurya"
    })
}

module.exports.signup_get = (req,res)=>{
    res.render('signup',{
        title:"Sign Up page"
    })
}

module.exports.signup_post = async (req,res)=>{
    const {name,email,phone,password} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    try {
        const user = await User.create({
            name: name,
            email: email,
            phone: phone,
            password:hashedPassword
        });
      res.send("User created successfully");

    } catch (error) {
        console.log("Error generating",error);
    }
}

module.exports.get_user = async (req,res)=>{
    try {
        const user= await User.findByPk(req.params.id);
        res.send(user);   
    } catch (error) {
        console.log("Error generating:",error);
    } 
}

module.exports.getAllUsers = async (req,res)=>{
    try {
        const user = await User.findAll();
        res.send(user);
    } catch (error) {
        console.log("Error getting all users",error);
    }
}

module.exports.update = async (req, res)=>{
    try {
        // const user = await User.findByPk(req.params.id);
        const updatedUser = await User.update(req.body,{
            where:{
                id:req.params.id
            }
        });
        res.send("User updated successfully");
    } catch (error) {
        console.log("Error",error);
    }
}

module.exports.deleteUser = async (req,res)=>{
    try {
        const deleteUser = await User.destroy({
            where:{
                id:req.params.id
            }
        })
        res.send("User deleted successfully")
    } catch (error) {
        console.log("Error",error);
    }
}