const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    user: 'jessica',
    password: 'Chuck@2536',
    host: 'localhost',
    database: 'model_example'
})

module.exports = connection;