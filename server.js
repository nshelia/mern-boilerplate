var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var index = require('./routes/index');
var users = require('./routes/users');
var config = require('./config');

mongoose.connect(config.database,{useMongoClient: true},err => {
	if (err) throw err;
})

var app = express();

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});


app.listen(process.env.PORT || 3000,() =>{
  console.log('Listening on port 3000');
});