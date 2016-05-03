'use strict';

module.exports = function(app, session) {
  app.use(session({
    secret:"abcd!23@",
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
    }
  }));
};