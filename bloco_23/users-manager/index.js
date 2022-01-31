// importamos as libs que vamos usar
const express = require('express');
const bodyParser = require('body-parser');
const middlewares = require('./middlewares');

// criamos a aplicação do express
const app = express();

// Instalamos o middleware que faz a leitura e conversão do corpo das requisiçoes em json
app.use(bodyParser.json());

// nossos middlewares de cada rota vem aqui
// dizemos para a express que toda req enviada ao POST /USER deve ser tratada pelo createUser
app.post('/user', middlewares.createUser);
app.get('./user', middlewares.getAllUsers);
app.get('./user/:id', middlewares.findUserById);
app.put('./user/:id', middlewares.updateUser);


app.use(middlewares.error);

// definimos a porta
const PORT = 3000;

// iniciamos o sevidor
app.listen(PORT, () => { console.log(`App listening on port ${PORT}`);});