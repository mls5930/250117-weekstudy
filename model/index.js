const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config')
const ImageModel = require('./file.model')
const db = config.db.development;

const Book = new Sequelize(db.database, db.username, db.password, db)

const sequelize = ImageModel(Book, DataTypes);


module.exports = {
    Book,
    sequelize
}