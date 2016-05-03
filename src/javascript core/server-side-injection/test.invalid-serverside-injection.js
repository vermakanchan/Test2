'use strict';

var promisemongo = require('promised-mongo');

module.exports = function(app) {
  var db = promisemongo('serversideinjectionlist', ['serversideinjectionlist']);

  app.post('/', function(req, res) {
    // not support yet
    eval('console.log("Hello World");');
      
    var x = req.body;
    // should capture this
    eval(x);
    // not support yet
    eval('db.contactlist.insert(x).then(function() {res.send("Done");});');
  });
};