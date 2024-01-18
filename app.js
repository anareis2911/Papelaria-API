const express = require('express');
const app = express();
const connection = require('./config/database')
const Produto = require('./models/produto')

app.use(express.urlencoded({extended:true}))
app.use(express.json());

// Importar rotas
const produtosRoutes = require('./routes/produtoRoutes');

// Usar rotas
app.use(produtosRoutes);

const PORT = process.env.PORT || 3000;
connection.sync()
          .then(() => app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`)))
          .catch((error) => console.log(error))


