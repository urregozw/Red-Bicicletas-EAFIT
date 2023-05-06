var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const cors = require('cors');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const session = require('express-session');

var indexRouter = require('./routes/index');

var app = express();

app.use(session({
  secret: 'my-secret-key',
  resave: false,
  saveUninitialized: true
}));


// ---------------------

// This is here for our client side to be able to talk to our server side. you may want to be less permissive in production and define specific domains.
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.use(passport.initialize());
app.use(passport.session());
app.use('/', indexRouter);
passport.serializeUser(function(user, cb) {
 cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
 cb(null, obj);
});
passport.use(new GoogleStrategy({
   clientID: process.env.GOOGLE_CLIENT_ID,
   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
   callbackURL: "http://localhost:5000/auth/google/callback"
 },
 function(accessToken, refreshToken, profile, done) {
   // here you can create a user in the database if you want to
   return done(null, profile);
 }
));

// ----------------------------------
module.exports = app;
