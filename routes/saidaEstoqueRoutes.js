const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/SaidaEstoqueController')

router.post('/produtos/:id/saida', ProdutoController.registrarSaida);

module.exports = router