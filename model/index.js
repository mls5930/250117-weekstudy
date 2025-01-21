const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config')
const db = config.db.development;
const sequelize = new Sequelize(db.database, db.username, db.password, db)

const Book = require('./file.model')(sequelize, DataTypes);

module.exports = {
    Book,
    sequelize
}