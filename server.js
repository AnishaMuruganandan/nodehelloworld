var express = require("express");
var app     = express();
app.use(express.static(__dirname + '/public/views'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/css'));
//Store all JS and CSS in Scripts folder.

app.get('/',function(req,res){
  res.sendFile('index.html');
  //It will find and locate index.html from View or Scripts
});

// app.get('/about',function(req,res){
//   res.sendFile('/about.html');
// });
//
// app.get('/sitemap',function(req,res){
//   res.sendFile('/sitemap.html');
// });

// app.listen(3000);
var port = process.env.PORT || 8000
server.listen(port, function() {
    console.log("App is running on port " + port);
});
console.log("Running at Port 3000");
