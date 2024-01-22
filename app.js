const express = require('express');
const app = express();
const connection = require('./config/database')
const Produto = require('./models/produto')
const EntradaEstoque = require ('./models/entradaEstoque')
const SaidaEstoque = require ('./models/saidaEstoque')
const produtosRoutes = require('./routes/produtoRoutes');
const entradaEstoqueRoutes = require('./routes/entradaEstoqueRoutes')
const saidaEstoqueRoutes = require('./routes/saidaEstoqueRoutes')

//app.use(express.urlencoded({extended:true}))
app.use(express.json());

// Usar rotas
app.use(produtosRoutes);
app.use(entradaEstoqueRoutes)
app.use(saidaEstoqueRoutes)

const PORT = process.env.PORT || 3000;
connection.sync()
          .then(() => app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`)))
          .catch((error) => console.log(error))