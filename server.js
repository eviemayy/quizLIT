var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 2094;

var cardData = require('./cardData');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
  //res.status(200).render('cardPage');
  res.status(200).render('homePage');
});

app.get('/:setName', function (req, res, next) {
  var name = req.params.setName.toLowerCase();
  if (cardData[name]) {
    res.status(200).render('cardPage', cardData[name]);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.get('*', function(req, res) {
    res.status(404).render('404');
});

app.listen(port, function() {
    console.log("== Server is listening on port", port);
});
