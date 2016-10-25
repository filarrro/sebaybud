var Sequelize = require('sequelize');
var db        = {};

var sequelize = new Sequelize('mydb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

var User = sequelize.define('user', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    name: Sequelize.STRING,
    email: {type: Sequelize.STRING, allowNull: false, unique: true},
    password: {type: Sequelize.STRING, allowNull: false},
    role: {type: Sequelize.INTEGER, defaultValue: 1}
});

var File = sequelize.define('file', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    source: {type: Sequelize.STRING, allowNull: false},
    desc: Sequelize.STRING,
    type: {type: Sequelize.INTEGER, allowNull: false}
});

var Price = sequelize.define('price', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: Sequelize.STRING, allowNull: false},
    price: {type: Sequelize.STRING, allowNull: false}
});

db.sequelize = sequelize;
db.User = User;
db.File = File;
db.Price = Price;

module.exports = db;