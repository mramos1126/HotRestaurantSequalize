var Sequelize = require("sequelize");

//  several connecections can be used to linked up a mysql database, but I just used one.
var source = {
  jawsDB: {
        port: 3306,
        host: 'q3vtafztappqbpzn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'xam5cl7oq1iq4s4s',
        password: 'ii4eqcwb83glaner',
        database: 'x8unix98zw4xvl7y'
    }

}



// this selects which source you want to link up
var selectedSource = source.jawsDB;

// this is where sequalize is used for mysql
var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
  host: selectedSource.host,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

// Exports the connection for other files to use
module.exports = sequelize;