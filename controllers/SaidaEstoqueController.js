const SaidaEstoque = require('../models/saidaEstoque')

exports.registrarSaida = async (req, res) => {
    const {quantidade, data_saida} = (req.body)
    const id_produto = +req.params.id
    const produto = await SaidaEstoque.create({id_produto, quantidade, data_saida})
    res.json({message: "Saída registrada com sucesso!"})
}