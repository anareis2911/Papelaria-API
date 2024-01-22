const Produto = require('../models/produto')

const registrarSaida = async (req, res) => {
    const {id_produto, quantidade, data_saida} = (req.body)
    const produto = await Produto.create({id_produto, quantidade, data_saida})
    res.json({message: "Saída registrada com sucesso!"})
}

module.exports = registrarSaida
