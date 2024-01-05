const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("This is just a Test");
})

app.listen("3000",function(){
    console.log("Its on");
})