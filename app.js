require('dotenv').config();
var bodyParser = require('body-parser');
var nocache = require('nocache');
var express = require("express");

var empList = require('./employees');
var empDetails = require('./getemployee');
var empSave = require('./saveemployee');
var empDelete = require('./deleteemployee');

var app = express();
var router = express.Router();
var path = __dirname + '/views/';

app.use(bodyParser.json());

app.use(nocache());

router.use(function (req,res,next) {  
  next();
});

app.use('/static', express.static(__dirname + '/public/'));

router.get("/", function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/EmployeeList", function(req,res){  
  empList(req, res);
});

router.get("/Employees/:id", function(req,res){  
  empDetails(req, res);
});

app.post("/SaveEmployee", function(req, res){
    empSave(req, res);    
});

app.get("/DeleteEmployee/:id", function(req, res){
    empDelete(req, res);    
});

app.use("/",router);

app.use("*", function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(process.env.PORT, function(){
  console.log("Application started at port: " + process.env.PORT);
});