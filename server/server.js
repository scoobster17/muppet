/**
 * Server config for Muppet mapping app
 */

/* DEPENDENCIES */

var express = require('express');
/*var http = require('http');
var https = require('https');
var fs = require('fs');*/

/* ************************************************************************** */

/* APP SETUP */

/*var options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};*/

var app = express();

app.use( express.static(__dirname + "/../app") );

app.use(express.static('bower_components'));
app.use('/bower_components', express.static('bower_components'));

/*
app.get('/', function(req, res) {
	fs.readFile( __dirname + '../app/index.html', 'utf8', function(err, data) {
		res.end(data);
	});
});
*/

/* ************************************************************************** */

/* SERVER */

/*
http.createServer(app).listen(7654);
https.createServer(options, app).listen(443);
*/

var server = app.listen(4227, function() {

	var host = server.address().address;
	var port = server.address().port;

	console.log("Muppet app listening @ http://%s:%s", host, port);

});