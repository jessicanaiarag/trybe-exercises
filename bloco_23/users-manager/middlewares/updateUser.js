const rescue = require('express-rescue');
const UserModel = require('../models/User');

module.exports = [
    (req, res, next) => {
        // de forma semelhante ao middleware de criação de usuário, começamos validando os dados da request
        const { error } = UserModel.isValid(req.body);

        // caso um erro de validação seja encontrado, iniciaremos o fluxo de erro e encerramos a execução dos nossos middlewares.
        if (error) return next(error);
        
        // se não há nenhum problema com os dados, podemos prosseguir para o proximo middleware
        next();
    },
    rescue(async (req, res) => {
        // extraimos o id do usuário da rota
        const { id } = req.params;
        // extraimos os dados da request
        const { firstName, lastName, email, password } = req.body;
        // pedimos que o model altere e nos devolva o usuário alterado
        const updateUser = await UserModel.updateUser(id, { firstName, lastName, email, password });
        // caso nenhum usuário seja encontrado
        if (!updateUser) {
            // retornamoso status 404 not found e uma msg de erro
            return res.status(404).json({ error: true, message: 'Usuário não encontrado' });
        }
        // caso de tudo certo, retornaremos o status 200 ok e os dados atualizados
        res.status(200).json(updateUser);
    }),
];