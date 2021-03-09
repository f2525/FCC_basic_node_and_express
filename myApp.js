var express = require('express');
var app = express();
require("dotenv").config()

app.use(function(req, res, next){
    console.log(req.method+" "+req.path+" - "+req.ip)
    next();
})

app.get("/", (req, res)=>{
    absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
})


app.use("/public", express.static(__dirname+"/public"))

app.get("/json", (req, res)=>{
    if (process.env.MESSAGE_STYLE==="uppercase"){
        res.json({"message": "HELLO JSON"})
    }
    else{
        res.json({"message": "Hello json"})
    }
})

app.get("/now", (req, res, next)=>{
    req.time = new Date().toString();
    next()
}, function(req, res){
    res.json({"time": req.time});
})














 module.exports = app;
