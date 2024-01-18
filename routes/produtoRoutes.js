const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/ProdutoController');

router.post('/produtos', ProdutoController.createProduto);

module.exports = router