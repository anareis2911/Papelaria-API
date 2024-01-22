const express = require('express');
const router = express.Router();
const EntradaEstoqueController= require('../controllers/EntradaEstoqueController')

router.post('/produtos/:id/entrada', EntradaEstoqueController.registrarEntrada);

module.exports = router