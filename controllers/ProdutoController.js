const Produto = require('../models/produto')

const createProduto = async (req, res) => {
    const { nome_produto, descricao, preco_unitario } = req.body
    const produto = await Produto.create({ nome_produto, descricao, preco_unitario })
    res.json(produto)
}

module.exports = {createProduto}