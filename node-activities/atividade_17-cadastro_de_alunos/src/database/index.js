const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js')
const connection = new Sequelize(dbConfig)
console.log(`Conectado na database: ${dbConfig.database}`)
module.exports = connection;
