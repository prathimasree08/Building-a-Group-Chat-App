const Sequelize = require('sequelize')
const sequelize = require('../Util/database')

const UserGroups = sequelize.define('usergroups', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
})

module.exports = UserGroups