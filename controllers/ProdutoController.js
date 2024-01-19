const Produto = require('../models/produto')

const createProduto = async (req, res) => {
    const { nome_produto, descricao, preco_unitario } = req.body
    const produto = await Produto.create({ nome_produto, descricao, preco_unitario })
    res.json({ message: 'Produto criado!' })
} 

const getAllProdutos = async (req,res) => {
    const produtos = await Produto.findAll()
    res.json(produtos)
}

const getProdutoById = async (req, res) => {
    const produto = await Produto.findByPk(req.params.id)
    res.json(produto)
}
module.exports = {createProduto,getAllProdutos,getProdutoById}