var express = require('express');
var path = require('path');
var app = express();

var json = require('express-json');


//<--To Display static html page -->
//app.use(express.static(path.join(__dirname, 'public')));
//app.use(json());
//<!--To Display json object -->
//app.use method accepts any http request
// app.use(function (req, res) {
//   console.log('Request Type:', req.method);
//   res.json({
//       helloWorld: 'Hello World!'
//   });
// });

//<!--Query parameteer value fetching-->
app.use(function (req, res) {
  //pareInt is to convert the value to pareInt
  //req.param(key passed in url) will fetch value from url
   var value1 = parseInt(req.param('a'));
   var value2 = parseInt(req.param('b'));
   //res.json method to return json object
  res.json({
      value: value1+value2
  });
});


var port = process.env.PORT || 4000;
app.listen(port, "0.0.0.0", function() {
console.log("Listening on Port" +port);
});
