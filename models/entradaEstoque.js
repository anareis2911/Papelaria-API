const Sequelize = require('sequelize');
const db = require('../config/database');

const EntradaEstoque = db.define('entradaEstoque',{
    id_entrada:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_produto:{
        type: Sequelize.INTEGER,
    }
})