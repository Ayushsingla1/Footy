const mongoose = require('mongoose');
require('dotenv').config();

const db = ()=>{
        mongoose.connect(process.env.MONGODB_URL,{

        })
        .then(()=>{console.log("Db connected successfully")})
        .catch(()=>{console.log("Unable to connect to db")})
}

module.exports = db;
