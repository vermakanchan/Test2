'use strict';

var crypto = require('crypto');

module.exports = function (app, session) {
    
    app.use(session({
        secret: 'session secret',
        cookie: {
            httpOnly: true,
            secure: true
        }
    }));
  
    app.get('/explicitly_using_randomnumber', function (req, res) {
        var mySess = req.session;
        
        // 1st way to generate random numbers
        var rnd = Math.random();
        
        // 2nd way to generate random numbers
        var array = new Uint32Array(10);
        crypto.getRandomValues(array);
        
        res.send('Please check your cookie' + rnd + array);
    });
};