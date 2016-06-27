var Sequelize = require("sequelize");

// Lists out connection options
var source = {
  jawsDB: {
        port: 3306,
        host: 'q3vtafztappqbpzn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 't6l6jh8elwkrurv7',
        password: 'ea9iqrachgaeugxs',
        database: 'kff5oam7u4ow8gm0'
    }

}



// Selects a connection (can be changed quickly as needed)
var selectedSource = source.jawsDB;

// Creates mySQL connection using Sequelize
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