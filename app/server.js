var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();
app.use('/images/', express.static(__dirname + '/images/'));
app.use('/img/', express.static(__dirname + '/images/'));
app.use('/scripts/', express.static(__dirname + '/scripts/'));
app.use('/styles/', express.static(__dirname + '/styles/'));
app.use('/scripts/', express.static(__dirname + '/scripts/'));
app.use('/fonts/', express.static(__dirname + '/fonts/'));
app.use('/libs/', express.static(__dirname + '/libs/'));
app.set('views', __dirname + '/views/');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.get("/service", function(req, res) {
  res.sendFile(__dirname + '/views/service.html');
})

app.get("/contact", function(req, res) {
  res.sendFile(__dirname + '/views/contact.html');
})

app.get("/portfolio", function(req, res) {
  res.sendFile(__dirname + '/views/portfolio.html');
})

app.get("/our-team", function(req, res) {
  res.sendFile(__dirname + '/views/team.html');
})

app.get("/test", function(req, res) {
  res.sendFile(__dirname + '/basic.html');
})

app.get("/test2", function(req, res) {
  res.sendFile(__dirname + '/test.html');
})

var server = app.listen(8080, function() {
  console.log('Listening on port %d', server.address().port);
});
