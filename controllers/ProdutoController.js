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

const updateProduto = async (req, res) => {
    const produto = await Produto.findByPk(req.params.id)
    await produto.update(req.body);
    res.json({message: 'Produto atualizado com sucesso!'});
}

const deleteProduto = async (req, res) => {
    const produto = await Produto.findByPk(req.params.id)
    await produto.destroy();
    res.json({message: 'Produto deletado com sucesso'});
}
module.exports = {createProduto, getAllProdutos, getProdutoById, updateProduto, deleteProduto}