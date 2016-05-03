'use strict';

module.exports = function(app, session) {
  app.use(session({
  secret:"s3Cur3",
  key: "sessionId",
  cookie: {
      httpOnly: true,
    domain: '.example.com',
    path: '/admin'
  }
}));

session.cookie.secure = false;

 app.get('/', function(req, res) {
    req.session.cookie.secure = false;
  });
};

