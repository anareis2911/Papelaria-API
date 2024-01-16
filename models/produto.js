const Sequelize = require('sequelize');
const db = require('../config/database');

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
        text: Sequelize.DECIMAL
    }
})

module.exports = Produto;