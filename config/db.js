const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    'jwtproject',
    'root',
    '',
    {
        host:"localhost",
        dialect:"mysql"
    }
);

sequelize.authenticate()
.then(()=>{
    console.log("Database authentication successfull");
}).catch((err)=>{
    console.log('Error authenticating database:', err);
})

module.exports = {
    sequelize,
    DataTypes
}