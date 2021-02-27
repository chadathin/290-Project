var express = require('express');
var path = require('path')

var app = express();
var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 7322);


var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "assets")));


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

app.get('/ODI_download', function(req, res) {
  let file = __dirname + "/assets/paper_copies/ODI.pdf"
  res.download(file, "ODI.pdf");
});

app.get('/FAAM_download', function(req, res) {
  let file = __dirname + "/assets/paper_copies/FAAM.pdf"
  res.download(file, "FAAM.pdf");
});

app.get('/UWRI_download', function(req, res) {
  let file = __dirname + "/assets/paper_copies/UWRI.pdf"
  res.download(file, "UWRI.pdf");
});

app.get('/KOOS_download', function(req, res) {
  let file = __dirname + "/assets/paper_copies/KOOS-JR-2017.pdf"
  res.download(file, "KOOS-JR-2017.pdf");
});


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
