const {sequelize, DataTypes} = require('../config/db');

const User = sequelize.define('User', {
    id:{
        type:DataTypes.INTEGER,
        unique:true,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    }
},{
    timestamps:true,
});
User.sync()
.then(()=>{
    console.log("Table sync successfully");
}).catch((err)=>{
    console.log('Error'+ err);
});

module.exports = User;