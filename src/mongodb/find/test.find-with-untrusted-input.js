  'use strict';

var mongojs = require('mongojs');
var db = mongojs('massassignment', ['massassignment']);
  
module.exports = function(app) {

    app.post('/massassignment', function (req, res) {
    console.log(req.body);
    
    db.massassignment.find(req.body, function(err, doc) {
      res.json(doc);
    });
  });
    
    
};