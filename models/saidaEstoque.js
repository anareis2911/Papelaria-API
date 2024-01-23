const Sequelize = require('sequelize');
const db = require('../config/database');
const Produto = require('./produto');

const SaidaEstoque = db.define('saidaEstoque',{
    id_saida:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantidade:{
        type: Sequelize.INTEGER
    },
    data_saida:{
        type: Sequelize.DATE
    }


})
module.exports = SaidaEstoque