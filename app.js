var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine" , "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("landing.ejs")
});

var port = process.env.PORT || 3000;
app.listen(port, process.env.IP, function(){

	console.log("portfolio has started" + port);
})