var express = require("express");
var app     = express();
var path = require('path');

// app.use(express.static(__dirname + '/public/views'));
//Store all HTML files in view folder.
// app.use(express.static(__dirname + '/css'));
//Store all JS and CSS in Scripts folder.

// app.get('/',function(req,res){
//   res.sendFile('public/views/index.html');
//   //It will find and locate index.html from View or Scripts
// });

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});



// app.get('/about',function(req,res){
//   res.sendFile('/about.html');
// });
//
// app.get('/sitemap',function(req,res){
//   res.sendFile('/sitemap.html');
// });

// app.listen(3000);
var port = process.env.PORT || 8000;
app.listen(port, function() {
    console.log("App is running on port " + port);
});
