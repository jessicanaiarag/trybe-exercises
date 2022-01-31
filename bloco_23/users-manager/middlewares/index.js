// Vamos utilizar o padrão que já vimos de ter um arquivo index.js 
//na pasta middlewares para permitir a importação fácil de todos os middlewares de uma vez
module.exports.createUser = require('./createUser');
module.exports.getAllUsers = require('./getAllUsers');
module.exports.findUserById = require('./findUserById');
module.exports.updateUser = require('./updateUser');
module.exports.error = require('./error');

