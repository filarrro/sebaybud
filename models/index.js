var Sequelize = require('sequelize');
var db = {};

var sequelize = new Sequelize('mydb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

var User = sequelize.define('user', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: Sequelize.STRING, allowNull: false, unique: true },
    password: { type: Sequelize.STRING, allowNull: false }
});

var File = sequelize.define('file', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    source: { type: Sequelize.STRING, allowNull: false },
    thumb: Sequelize.STRING,
    desc: Sequelize.STRING,
    type: { type: Sequelize.INTEGER, allowNull: false }
});

var Testimontial = sequelize.define('testal', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    user: { type: Sequelize.STRING },
    img: { type: Sequelize.STRING, allowNull: false },
    text: Sequelize.STRING
});

var Price = sequelize.define('price', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false },
    price: { type: Sequelize.STRING, allowNull: false }
});

var PriceCategory = sequelize.define('priceCategory', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false }
});

Price.belongsTo(PriceCategory, { as: 'category', foreignKey: { allowNull: false }, onDelete: 'CASCADE' });

db.sequelize = sequelize;
db.User = User;
db.File = File;
db.Testimontial = Testimontial;
db.Price = Price;
db.PriceCategory = PriceCategory;

module.exports = db;