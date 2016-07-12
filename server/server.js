var express = require('express');
var http = require('http');
var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

var app = express();

app.use( express.static(__dirname + "/../app") );

/*
app.get('/', function(req, res) {
	fs.readFile( __dirname + '../app/index.html', 'utf8', function(err, data) {
		res.end(data);
	});
});
*/

/*
http.createServer(app).listen(7654);
https.createServer(options, app).listen(443);
*/

var server = app.listen(4227, function() {

	var host = server.address().address;
	var port = server.address().port;

	console.log("Muppet app listening @ http://%s:%s", host, port);

});