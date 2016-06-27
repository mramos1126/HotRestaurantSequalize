//gathering  data from different files and it is used to route.

var tableData 		= require('../data/table-data.js');
var waitListData 	= require('../data/waitinglist-data.js');
var path 			= require('path');
var Waiting         = require('../models/waiting.js');
var Tables          = require('../models/tables.js');



// ===============================================================================
// ROUTING
// ===============================================================================
// displays all the content the user posted. It will be shown in either the table or waiting page.
module.exports = function(app){


	app.get('/api/tables', function(req, res){
		Tables.findAll().then(function(result){
					res.json(result);

				})
	});

	app.get('/api/waitlist', function(req, res){
		Waiting.findAll().then(function(result){
					res.json(result);

				})
	});

	
	app.post('/api/tables', function(req, res){

// after the  user puts down the info on the page, the info will be determine whether the
// person will be in in the table list or not. If there are more than five people on the table list,
// the person will be sent to the waiting list.


			Tables.findAll().then(function(result) {
				console.log(result);
				if(result.length<5){
					Tables.create({
						
						customerName: req.body.customerName,
						customerEmail: req.body.customerEmail,
						customerID: req.body.customerID,
						phoneNumber: req.body.phoneNumber
					});

					res.json(true)
				} else{
					Waiting.create({
						
						customerName: req.body.customerName,
						customerEmail: req.body.customerEmail,
						customerID: req.body.customerID,
						phoneNumber: req.body.phoneNumber
					});
					res.json(false);
				}
			});
		
	});


	// clears everything

	app.post('/api/clear', function(req, res){
		// Empty out the arrays of data
		tableData = [];
		waitListData = [];

		console.log(tableData);
	});
}