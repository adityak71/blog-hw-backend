const express = require('express');
const app = express();
require('dotenv').config();
const dbconnect = require('./config/dbConnect');
const postRoutes = require('./routes/postRoutes');
const commentsRoutes = require('./routes/commentsRoutes');
const likesRoute = require('./routes/likesRoutes');

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use("/api/v1", postRoutes);
app.use("/api/v1",commentsRoutes);
app.use("/api/v1", likesRoute);


app.get("/",(req,res)=>{
    res.send("Working Fine")
})



app.listen(PORT, ()=>{
    console.log(`Server Started At ${PORT}`);
    dbconnect();
})