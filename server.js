var express=require("express");
var app=express();
app.use(express.static(__dirname + '/public'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());



var ipaddress = process.env.OPENSHIFT_NODEJS_IP||"127.0.0.1";
var port=process.env.OPENSHIFT_NODEJS_PORT||8080;



require("./public/assignment/server/app.js")(app);
app.listen(port,ipaddress);
