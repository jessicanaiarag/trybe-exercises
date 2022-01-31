const rescue = require('express-rescue');
const User = require('../models/User');

module.exports = rescue(async (req, res) => {
    // extraimos o ID dos parametros da rota
    const { id } = req.params;
    // pedimos para o model buscar o usuário
    const user = await user.findById(id);
    // caso nenhum usuário seja encontrado
    if (!user) {
        // retornamos o status 404 not found e uma msg de erro
        return res.status(404).json({ error: true, message: 'usuário não encontrado'});
    }
    // caso o usuário exista, retornamos o status 200 ok e o usuário
    return res.status(200).json(user);
});