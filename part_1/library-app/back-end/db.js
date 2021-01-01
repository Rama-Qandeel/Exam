const mySql=require("mysql2")
require('dotenv').config();
const connection = mysql.createConnection({
    host: process.env.DBHost,
    user: 'root',
    database: 'test'
  });


  module.exports=connection