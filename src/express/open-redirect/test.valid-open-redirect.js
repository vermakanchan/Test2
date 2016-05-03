  'use strict';
  
module.exports = function(app) {

    app.post('/', function (req, res) {
//        res.send('Hello World!');
    
    // Verify URL before redirecting
//  res.redirect('redirecting to http://www.codiscope.com');
         var url = app.locals.url;
        res.redirect(302, 'https://' + req.host + '/' + url);
});
    
    
};