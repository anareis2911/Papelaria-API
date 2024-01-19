const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/ProdutoController');

router.post('/produtos', ProdutoController.createProduto);
router.get('/produtos', ProdutoController.getAllProdutos);
router.get('/produtos/:id', ProdutoController.getProdutoById);
router.put('/produtos/:id', ProdutoController.updateProduto);
router.delete('/produtos/:id', ProdutoController.deleteProduto);

module.exports = router