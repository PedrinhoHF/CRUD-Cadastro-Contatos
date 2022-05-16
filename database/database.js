const Sequelize = require('sequelize')

const configDB = require('../database/config/config')
const  user = require('../models/user')
const linkDB = new Sequelize(configDB)

user.init(linkDB)

module.exports = linkDB