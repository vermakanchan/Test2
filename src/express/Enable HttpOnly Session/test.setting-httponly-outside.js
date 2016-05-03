'use strict';

module.exports = function(app, session) {
  app.use(session({
  secret:"s3Cur3",
  key: "sessionId",
  cookie: {
      secure: true,
    domain: '.example.com',
    path: '/admin'
  }
}));

session.cookie.httpOnly = false;

 app.get('/', function(req, res) {
    req.session.cookie.httpOnly = false;
  });
};