const EntradaEstoque = require('../models/entradaEstoque')

exports.registrarEntrada = async (req, res) => {
    const {quantidade, data_entrada} = (req.body)
    const id_produto = req.params.id
    const produto = await EntradaEstoque.create({id_produto, quantidade, data_entrada})
    res.json({message: "Entrada registrada com sucesso!"})
}


