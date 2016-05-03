var express = require('express');
var session = require('express-session');
var csrf = require('csurf');
var helmet = require('helmet');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var app = express();


// support json encoded bodies
app.use(bodyParser.json());
// support encoded bodies
app.use(bodyParser.urlencoded({extended: true}));




// ************** for Express x-powered-by test ********
//app.disable( 'X-Powered-By' );
//app.use(helmet());
//app.use(helmet.noCache());
//require('./src/express/express-xpoweredby/express-xpoweredby')(app, session);

// ************** for HTML - insecure script tests ********
app.set("view engine", "html");
//app.set("views", process.cwd() + "/views");
app.set("views", __dirname + "/src/views");

//require('./src/HTML/test.invalid-insecure-script.html');
//require('./src/HTML/test.invalid-insecure-script')(app);


// ************** for Express - enable http only session tests ********
//require('./src/express/Enable HttpOnly Session/EnableHttpOnlySession')(app, session);
//require('./src/express/Enable HttpOnly Session/test.valid-enableHttpOnlySession')(app, session);
//require('./src/express/Enable HttpOnly Session/test.httponlyfalse')(app, session);
//require('./src/express/Enable HttpOnly Session/test.missing-httponly')(app, session);
//require('./src/express/Enable HttpOnly Session/test.setting-httponly-outside')(app, session);
//
// ************** for Express - enable secure session tests ********
//require('./src/express/EnableSecureSession/test.missing-secure')(app, session);
//require('./src/express/EnableSecureSession/test.securesessionfalse')(app, session);
//require('./src/express/EnableSecureSession/test.setting-secure-outside')(app, session);
//require('./src/express/EnableSecureSession/test.valid-enable-secure-session')(app, session);
//
//// ************** for Express - open redirect tests ********
//require('./src/express/open-redirect/test.valid-open-redirect')(app, session);
//
//// ************** for random number tests ********
//require('./src/javascript core/clientside prng/test.negative-randomnumber-use')(app, session);
//
//// ************** for mongodb insert tests ********
//require('./src/mongodb/insert/test.invalid-untrusted-input-insert')(app, session);
//
//// ************** for mongoDB find tests ********
//require('./src/mongodb/find/test.find-with-untrusted-input')(app, session);
//
//// ************** for serverside injection tests ********
//require('./src/javascript core/server-side-injection/test.invalid-serverside-injection')(app, session);
//
//// ************** for node and node modules - https module injection tests ********
//require('./src/node-and-node-modules/https-module/test.invalid-insecure-ssl-protocol-globalagent')(app, session);
//require('./src/node-and-node-modules/https-module/test.invalid-insecure-ssl-protocol-httpsoption')(app, session);
//require('./src/node-and-node-modules/https-module/test.invalid-insecure-ssl-protocol-requestagentoptions')(app, session);
//
//// ************** for node and node modules - path module injection tests ********
//require('./src/node-and-node-modules/path-module/test.invalid-untrusted-input-path-traversal')(app, session);
//require('./src/node-and-node-modules/path-module/test.invalid-untrusted-input-path-traversal_1')(app, session);
//
//// ************** for JavaScript Core - cross site scripting ********
//app.engine('html', ejs.renderFile);
//require('./src/javascript core/cross-site-scripting/test.invalid-crossside-scripting')(app, session);


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
