const rescue = require('express-rescue');
const res = require('express/lib/response');
const UserModel = require('../models/User');

// pedimos para o model buscar todos os usuarios
module.exports = rescue(async (_req, res) => {
    const allUsers = await UserModel.findAll();
    res.status(200).json(allUsers);
});

// como o find sempre retorna um array não precisamos nos preocupar:
// caso nenhum resultado seja encontrado, o proprio mysql retornara um array vazio

res.status(200).json(users);