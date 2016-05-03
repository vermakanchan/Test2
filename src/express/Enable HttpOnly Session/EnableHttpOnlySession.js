var express = require('express');
var session = require('express-session');
var csrf = require('csurf');

var app = express();

app.use(session({
  secret: 'My super session secret',
  cookie: {
//   httpOnly: true,
    secure: true
  }
}));

app.use(csrf());

app.use(function(req, res, next) {
  res.locals._csrf = req.csrfToken();
  next();
});
