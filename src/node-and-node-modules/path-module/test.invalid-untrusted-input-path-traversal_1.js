var path = require('path');
var app = require('express')();


// Start the app and visit the following URLs
// Path Injection - http://localhost:3000/..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2Fetc

function getUserHomeDirectory(username) {
    console.log("Resolving " + username + " to home directory");
    return path.resolve(__dirname, 'home', username);
}

app.get('/path/:username', function(req, res) {
    var username = req.params.username;
    res.send('Your home directory is located at: ' + getUserHomeDirectory(username));
});
