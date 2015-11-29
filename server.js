var express = require('express');
var app = express();


var mongoose = require('mongoose');
var localMongoPath = 'mongodb://localhost/cs5610fall2015';
var mongoConnectionPath = (process.env.OPENSHIFT_MONGODB_DB_URL || localMongoPath);
mongoose.connect(mongoConnectionPath);
var db = mongoose.connection;

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(bodyParser.json());
app.use(multer());


app.use(express.static(__dirname + '/public'));


var ip = process.env.OPENSHIFT_NODEJS_IP||"127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT||3000;


require("./public/assignment/server/app.js")(app, mongoose, db);
require("./public/project/server/app.js")(app, mongoose, db);

app.listen(port,ip);




