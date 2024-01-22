const Sequelize = require('sequelize');
const db = require('../config/database');
const Produto = require('./produto');

const EntradaEstoque = db.define('entradaEstoque',{
    id_entrada:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantidade:{
        type: Sequelize.INTEGER
    },
    data_entrada:{
        type: Sequelize.DATE
    }
})

module.exports = EntradaEstoque