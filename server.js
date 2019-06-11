const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fs-04-xedike",{useNewUrlParser:true})
.then(()=> console.log("connected to DB"))
.catch(err=> console.log(err))
const app = express();
const port = process.env.port || 5000;
app.listen(5000,()=>{
    console.log(`server is running on port ${port}`)
})
