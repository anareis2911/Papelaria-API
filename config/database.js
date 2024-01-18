const { Sequelize } = require('sequelize');

const dbName = 'Papelaria';
const dbUser = 'root';
const dbPassword = '';
const dbHost = 'localhost';

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'mysql'
})

try {
   sequelize.authenticate() 
} catch (error) {
    console.log(error)
}

module.exports = sequelize