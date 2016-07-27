///dependecies to get the server to work

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');





//creates a server and and sets a port.

var app = express(); 
var PORT = process.env.PORT || 8080; 

// bodyparser is used to interpret data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));







// this is the routing section. This a map that helps user get into a page depending the url.

require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);









// starts the server

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});