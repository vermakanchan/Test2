'use strict';

module.exports = function (app, session) {
    
    app.use(session({
        secret: 'session secret',
        cookie: {
            httpOnly: true,
            secure: true
        }
    }));
    
      // Switch off the default 'X-Powered-By: Express' header
//      app.disable( 'x-powered-by' );

  
};