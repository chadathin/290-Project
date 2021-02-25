var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);


var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/contact', function(req,res){
  var send = [];
  for (var p in req.body){
    send.push({'name':v,'value':req.body[v]})
  }
  console.log(send);
  console.log(req.body);
  var out = {};
  out.dataList = send;
});


app.get('/', function(req, res) {
    res.render('home');
});

app.get('/faam', function(req, res){
  res.render('faam')
});

app.get('/koos', function(req, res){
  res.render('koos')
});

app.get('/odi', function(req, res){
  res.render('odi')
});

app.get('/uwri', function(req, res){
  res.render('uwri')
});

app.get('/contact', function(req, res){
  res.render('contact')
});

app.use(express.static("assets"));


app.use(function(req, res) {
    res.status(404);
    res.render('404');
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
