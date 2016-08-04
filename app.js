var express = require("express");
var fallback = require("express-history-api-fallback");

var port = process.env.PORT ? JSON.parse(process.env.PORT) : 8880;

console.log('-- port: ' + port);

var app = express();
var root = __dirname + '/pub';

app.use(express.static(root));
app.use(fallback('index.html', {root:root}));

app.listen(port, function () {
	console.log('App Server is running on port ' + port + '!');
})