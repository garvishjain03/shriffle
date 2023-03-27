// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('auth','postgres','tiger',{
//     dialect: 'mysql',
//     host: 'localhost'
// })

// module.exports = sequelize;

const mongoose = require('mongoose');
const db = process.env.DATABASE
mongoose.connect(db,{
    useNewUelParser: true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('connect to mongoDB');
})