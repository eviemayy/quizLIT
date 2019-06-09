var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 2094;


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/index.html', function (req, res) {
    res.status(200).sendFile('./public/index.html');
});

app.get('*', function(req, res) {
    res.status(404).render('404');
});

app.listen(port, function() {
    console.log("== Server is listening on port", port);
});
