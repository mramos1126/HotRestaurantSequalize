//dependency for sequelize
var Sequelize = require('sequelize');
var sequelize = require('../config/config.js');

//creates a table into a database with all properties

var Waiting = sequelize.define('waitings', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	customerName: {
		type: Sequelize.STRING
	},
	customerEmail:{
		type: Sequelize.STRING
	},
	customerID: {
		type: Sequelize.STRING
	},
	phoneNumber: {
		type: Sequelize.STRING
	}
},
	{timestamps: false}
);


Waiting.sync()

module.exports = Waiting