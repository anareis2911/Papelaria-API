const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/EntradaEstoqueController')

router.post('/produtos/:id/entrada', ProdutoController.registrarEntrada);

module.exports = router