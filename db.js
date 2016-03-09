var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
    dialect: 'postgres'
});
var db = {};

db.todo = sequelize.import(__dirname + '/models/todo.js');
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
