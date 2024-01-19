const Produto = require('../models/produto')

const registrarEntrada = async (req, res) => {
    const {id_produto, quantidade, data_entrada} = (req.body)
    const produto = await Produto.create({id_produto, quantidade, data_entrada})
    res.json({message: "Entrada registrada com sucesso!"})
}

module.exports = registrarEntrada
