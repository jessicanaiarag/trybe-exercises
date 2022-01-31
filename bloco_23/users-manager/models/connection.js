// Importamos o driver do banco de dados
const mysql = require('mysql2/promise');

// Criamos uma "pool" de conexões
const connection = mysql.createPool({
    host:'localhost',
    user: 'jessica',
    password: 'Chuck@2536',
    database:'user_crud',
});

// Retornamos a pool criado para que possa ser utilizado pelo model.
module.exports = connection;
