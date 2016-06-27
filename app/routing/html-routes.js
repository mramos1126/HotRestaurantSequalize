// dependecy for routing the html pages.
var path = require('path');





// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

	// these are get requests and takes you to a specific page
	
	app.get('/tables', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/tables.html'));
	});

	app.get('/reserve', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/reserve.html'));
	});

	// If no matching route is found default to home
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

}