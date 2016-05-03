var path = require('path');


// Start the app and visit the following URLs
// Path Injection - http://localhost:3000/..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2Fetc

module.exports = function(app, Session) {
//var ejs = require('secure-filters').configure(require('ejs'));
  var users = {
    1: {
      name: 'John Doe',
      alias: 'john',
      description: '<script>alert("hacked!")</script>',
      color: '#CCC;" onload="javascript:alert(\'yet another hack!\')',
      config: {
        motto: "</script><script>alert('hacked again!!'); </script>"
      },
      id: 1
    }
  };

  app.use('/users/:id', function(req, res, next) {
    res.render('index', {
      user: users[req.params.id]
    });
  });
  /*app.get('/', function(req, res) {
    response.render("index");
  });*/

/*function getUserHomeDirectory(username) {
    console.log("Resolving " + username + " to home directory");
    return path.resolve(__dirname, 'home', username);
}


app.get('/path/:username', function(req, res) {
    var username = req.params.username;
    res.send('Your home directory is located at: ' + getUserHomeDirectory(username));
//    res.render();
//    res.end();
});*/
};
