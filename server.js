var express = require('express');
var path = require('path');
var app = express();

//<!--To include json-->
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
// app.use(function (req, res) {
  //pareInt is to convert the value to pareInt
  //req.param(key passed in url) will fetch value from url
   // var value1 = parseInt(req.param('a'));
   // var value2 = parseInt(req.param('b'));
   //res.json method to return json object
//   res.json({
//       value: value1+value2
//   });
// });
const MongoClient = require('mongodb').MongoClient

app.use(function (req, res) {
//<!--To write into collection into mlab db-->
  //  var myobj = { name: "Company Inc", address: "Highway 37" };
  // db.collection('quotes').save(myobj, (err, result) => {
  //   if (err) return console.log(err)
  //
  //   console.log('saved to database')
  //   res.redirect('/')
  //<!--end of writing collection-->
  // var cursor = db.collection('quotes').find()
  //<!--To read the collection from mlab-->
  db.collection('quotes').find().toArray(function(err, results) {
  //console.log(results)
  res.json({
results
    });
  //<!--end of read>
  // send HTML file populated with quotes here
})
//  })
})
var db
  var port = process.env.PORT || 4000;

MongoClient.connect('mongodb://root:root@ds151908.mlab.com:51908/details', (err, client) => {
  if (err) return console.log(err)
  db = client.db('details') // whatever your database name is

  app.listen(port, "0.0.0.0", function() {
  console.log("Listening on Port" +port);

  });
})
