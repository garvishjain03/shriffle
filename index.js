const express = require('express');
const user = require('./routes/user');
const user = require('./models');
const mongoose = require('mongoose')
const app = express();
require('dotenv').config();
const db = require('./db/db')

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(user);

app.listen(process.env.PORT,()=>{
    console.log('server is running');
});
module.exports = app;