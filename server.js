var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 2094;


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

var cardData = require('./cardData');

app.get('/:setName', function (req, res, next) {
  var name = req.params.setName.toLowerCase();
  if (cardData[name]) {
    res.status(200).render('cardPage', cardData[name]);
  } else {
    next();
  }
});

app.get('/', function (req, res) {
    res.status(200).render('homePage');
});

app.get('*', function(req, res) {
    res.status(404).render('404');
});

/*app.post('/:setName', function (req, res, next) {
});*/

app.post('/:setName/addCard', function (req, res, next) {
  if (req.body && req.body.term && req.body.defintion) {
    var name = req.params.setName.toLowerCase();
    console.log("req.body.term: ", req.body.term, "req.body.definition:", req.body.definition)
    if (cardData[name]) {
      cardData[name].cards.push({
        term: req.body.term,
        defintion: req.body.defintion
      });
      console.log("== cards for", name, ":", cardData[name].cards);
      res.status(200).send("Card successfully added");
    } else {
      next();
    }
  } else {
    res.status(400).send({
      error: "Request body needs a term and defintion."
    });
  }
});

app.listen(port, function() {
    console.log("== Server is listening on port", port);
});
