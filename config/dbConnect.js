const mongoose = require('mongoose');
require('dotenv').config();

const db_url = process.env.DB_URL;
const dbconnect = () =>{

    mongoose.connect(db_url)
    .then(()=>{
        console.log("Databse connected successfuly");
    })
    .catch((error)=>{
        console.log("Error While DataBase connecting");
        console.error(error);

        //forcefully terminating the application because wothout database it will not work
        process.exit(1);
        // that is very important
    })
}


module.exports = dbconnect;