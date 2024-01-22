const express = require('express');
const router = express.Router();
const SaidaEstoqueController = require('../controllers/SaidaEstoqueController')

router.post('/produtos/:id/saida', SaidaEstoqueController.registrarSaida);

module.exports = router