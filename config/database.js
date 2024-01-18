const { Sequelize } = require('sequelize');

const dbName = 'Papelaria';
const dbUser = 'Estoquista';
const dbPassword = 'estoquista2024';
const dbHost = 'localhost';

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'mysql'
})

export default sequelize