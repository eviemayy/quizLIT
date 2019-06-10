var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 2094;


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.use(express.static('public'));

var cardData = require('./cardData');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  console.log('/ was entered in url');
  res.status(200).render('homePage');
});

app.get('/:setName', function (req, res, next) {
  console.log("/:setName");
  var name = req.params.setName.toLowerCase();
  if (cardData[name]) {
    res.status(200).render('cardPage', cardData[name]);
  } else {
    next();
  }
});

/*app.post('/:setName', function (req, res, next) {
});*/

app.post('/:setName/addCard', function (req, res, next) {
  console.log("app.post");
  if (req.body && req.body.term && req.body.definition) {
    var name = req.params.setName.toLowerCase();
    console.log("req.body.term: ", req.body.term, "req.body.definition:", req.body.definition)
    if (cardData[name]) {
      cardData[name].cards.push({
        term: req.body.term,
        definition: req.body.definition
      });
      console.log("== cards for", name, ":", cardData[name].cards);
      res.status(200).send("Card successfully added");
    } else {
      next();
    }
  } else {
    res.status(400).send({
      error: "Request body needs a term and definition."
    });
  }
});

app.get('*', function(req, res) {
    console.log("404");
    res.status(404).render('404');
});

app.listen(port, function() {
    console.log("== Server is listening on port", port);
});
