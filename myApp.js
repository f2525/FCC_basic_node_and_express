var express = require('express');
var app = express();



app.get("/", (req, res)=>{
    absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
})


app.use("/public", express.static(__dirname+"/public"))

app.get("/json", (req, res)=>{
    res.json({"message": "Hello json"})
})

















 module.exports = app;
