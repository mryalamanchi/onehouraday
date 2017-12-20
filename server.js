var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use('/static', express.static('frontend'));
app.use('/bower', express.static('bower_components'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/frontend/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});