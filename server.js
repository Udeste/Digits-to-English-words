var express = require('express');

var numberConversionServer = express();

numberConversionServer.use('/convert', require('./node/convert_api'));

var port = process.env.app_port || 8080;

numberConversionServer.listen(port,function(){
    console.log("Server has started");  
});