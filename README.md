# API de Estoque de Papelaria 📝
    Atividade prática de criação de API baseada em um Diagrama Entidade Relacionamento que descreve um sistema de gerenciamento de estoque de Papelaria com três entidades: PRODUTOS, ENTRADAS_ESTOQUE e SAIDAS_ESTOQUE.

## Diagrama Entidade Relacionamento: 🖇️
! [DRE](./assets/DRE.jpeg)

## Tecnologias Utilizadas: 💻
- [x] JavaScript
- [x] Node.js
- [x] Express.js
- [x] Sequelize
- [x] MySQL
- [x] Postman

## Estrutura do Projeto:
- `./app.js`: É o arquivo principal do projeto
- `./config`: Na pasta config encontra-se o arquivo `database.js` de configuração do banco de dados
- `./models`: Na pasta models está definido o modelo das entidades com os arquivos `entradaEstoque.js`, `produto.js` e `saidaEstoque`
- `./routes`: Na pasta routes estão as rotas para as operações CRUD de cada entidade com os arquivos `entradaEstoqueRoutes.js`, `produtoRoutes.js` e `saidaEstoqueRoutes.js`
- `./controllers`: Na pasta controllers encontra-se o controle da lógica de negócios de cada entidade nos arquivos `EntradaEstoqueController.js`, `ProdutoController.js` e `SaidaEstoqueController.js`
- `./resources`: Em resources estão os endpoints

## Collections:
#### Produtos:
- POST /produtos = Criar novo produto
- GET /produtos = Obter todos os produtos
- GET /produtos/:id = Obter produto por id
- PUT /produtos/:id = Atualizar produto
- DEL /produtos/:id = Deletar produto
#### Entradas Estoque:
- POST /produtos/:id/entrada = Registrar entrada
#### Saídas Estoque: 
- POST /produtos/:id/saida = Registrar saída

## Para rodar o projeto em sua máquina:
```bash
# Clone o repositório:
$ git clone...

# Instale as dependências:
$ npm install

# Inicie o MySQL e crie um Banco de Dados

# Rode o APP:
$ npm start
```

## Pessoas autoras:
#### Aluna: Ana Carolina Reis
#### Professor: Samuel Levi