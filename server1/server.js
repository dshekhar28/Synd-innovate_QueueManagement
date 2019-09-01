var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require('body-parser');
require('request-debug')(request);
var fetch =  require('fetch');
var mysql = require('mysql');
var ip = require("ip");
//var config = require("./config.json");
var ip = require("ip");
const FileSystem = require("fs");
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  // CORS removal
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Headers", "Authorization, Cache-Control, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
  });
  //for getting ipaddress
  app.get('/ipaddr',(req,res)=>{
    res.send(ip.address());
  })

  // Static HTML server
  app.use(express.static(__dirname + '/public'));

  // DB Connection
  //var pool = mysql.createPool(config);

  //  An endpoint to test from mobile application
  app.get('/test', (req, res) =>{
    var done = {
      "sucess": 1
    }
    res.send(done);
  });

  // Endoint to get ip address
  app.get('/getip',(req,res)=>{
   res.send(req.connection.remoteAddress);
  });


  // Starting the server on 8083 port
  app.listen(8083, function () {
    console.log('App listening on port 8083!');
  });
