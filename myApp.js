var express = require('express');
var app = express();
require("dotenv").config();
var bodyParser = require("body-parser");

//middleware function should be put on top of other function or route function
app.use(function(req, res, next){
    console.log(req.method+" "+req.path+" - "+req.ip)
    next();
})

app.use(bodyParser.urlencoded({extended: false}));

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

app.get("/:word/echo", (req, res)=>{
    res.json({echo: req.params.word})
})

//to receive both POST and GET request in the same route path
app.route("/name")
    .get( (req,res)=>{
        res.json({name: req.query.first + " " + req.query.last})
    })
    .post( (req,res)=>{
        res.json({name: req.body.first + " " + req.body.last})
    })










 module.exports = app;
