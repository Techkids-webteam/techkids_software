var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();
app.use('/images/', express.static(__dirname + '/images/'));
app.use('/scripts/', express.static(__dirname + '/scripts/'));
app.use('/styles/', express.static(__dirname + '/styles/'));
app.use('/scripts/', express.static(__dirname + '/scripts/'));
app.use('/fonts/', express.static(__dirname + '/fonts/'));
app.set('views', __dirname + '/views/');
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
})

var server = app.listen(3103, function() {
  console.log('Listening on port %d', server.address().port);
});
