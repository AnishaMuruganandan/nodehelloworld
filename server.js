var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
//app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});




// var express = require("express");
// var app     = express();
// var path = require('path');
//
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });
//
// var port = process.env.PORT || 8000;
// app.listen(port, function() {
//     console.log("App is running on port " + port);
// });
