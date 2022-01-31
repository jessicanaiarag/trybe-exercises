// carregamos as variaveis de ambiente
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cep = require('./controllers/cep');
const errorMiddleware = require('./middlewares/error');

// criamos a aplicação do express
const app = express();
app.use(bodyParser.json());

// resgistramos o endpoint 'get /ping'
app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'pong!'});
});

app.get('/cep/:cep', cep.findAddressByCep);

app.post('/cep', cep.create);

app.use(errorMiddleware);

// lemos a porta de variavel de ambiente, ou usamos 3000
const PORT = process.env.PORT || 3000;

// iniciamos a aplicação ouvindo na porta informada na variavel de ambiente
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`);}); 