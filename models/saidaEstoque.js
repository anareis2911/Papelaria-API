const Sequelize = require('sequelize');
const db = require('../config/database');

const SaidaEstoque = db.define('saidaEstoque',{
    id_saida:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_produto:{
        type: Sequelize.INTEGER
    },
    quantidade:{
        type: Sequelize.INTEGER
    },
    data_saida:{
        type: Sequelize.DATE
    }


})
//SaidaEstoque.belongsTo(Produto)
module.exports = SaidaEstoque