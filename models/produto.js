const Sequelize = require('sequelize');
const db = require('../config/database');
const EntradaEstoque = require('./entradaEstoque');
const SaidaEstoque = require('./saidaEstoque');

const Produto = db.define('produto', {
    id_produto:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_produto:{
        type: Sequelize.STRING
    },
    descricao:{
        type: Sequelize.TEXT
    },
    preco_unitario:{
        type: Sequelize.DECIMAL(10,2)
    }
})

Produto.hasMany(EntradaEstoque, {
    foreignKey:{
        name: "id_produto"
    }
})

Produto.hasMany(SaidaEstoque,{
    foreignKey:{
        name: "id_produto"
    }
})

module.exports = Produto