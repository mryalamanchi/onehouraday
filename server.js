var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000));

app.use('/static', express.static('frontend'));
app.use('/bower', express.static('bower_components'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.get('/', function(req, res) {
    res.sendFile(__dirname + '/frontend/public/index.html');
});

//need to store the url in property file
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/onehouraday");


//dynamically include routes
fs.readdirSync('./controller').forEach(function (file) {
  console.log('File :'+file);
  if(file.substr(-3) == '.js') {
      route = require('./controller/' + file);
      route.controller(app);
  }
});




app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});