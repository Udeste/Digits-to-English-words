var express = require('express');
var convert_function = require('./convert_func')
var convert_api = express();

// Api numberConversionServer definition
convert_api.get('/:num',function(req,res){
    var _number = req.params.num;
    var converted_number = convert_function(_number);
    var response = {
        number: _number,
        word: converted_number
    };
    res.status(200).json(response);
});

module.exports = convert_api;