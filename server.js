var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 2094;

var cardData = require('./cardData');

// var mongoHost = process.env.MONGO_HOST;
// var mongoPort = process.env.MONGO_PORT || 27017;
// var mongoUser = process.env.MONGO_USER;
// var mongoPassword = process.env.MONGO_PASSWORD;
// var mongoDBName = process.env.MONGO_DB_NAME;

// var mongoUrl = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDBName}`;
// var db = null;


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());


app.get('/', function (req, res) {
  //res.status(200).render('cardPage');
  res.status(200).render('homePage');
});

app.get('/home', function (req, res) {
  res.status(200).render('homePage');
});

app.get('/:setName', function (req, res, next) {
  var name = req.params.setName.toLowerCase();
  //console.log("==url name", name);
  if (cardData[name]) {
    res.status(200).render('cardPage', cardData[name]);
  } else {
    next();
  }

  // var collection = db.collection('card');
  // collection.find({ set: name }).toArray(function (err, card) {
  //   if (err) {
  //     res.status(500).send({
  //       error: "Error fetching card from DB"
  //     });
  //   } else if (card.length < 1) {
  //     next();
  //   } else {
  //     console.log("== card:", card);
  //     res.status(200).render('cardPage', card[0]);
  //   }
  // });

});

app.use(express.static('public'));

app.get('*', function(req, res) {
    res.status(404).render('404');
});

MongoClient.connect(mongoUrl, { useNewUrlParser: true }, function (err, client) {
  if (err) {
    throw err;
  }
  db = client.db(mongoDBName);
  app.listen(port, function() {
      console.log("== Server is listening on port", port);
  });
});
