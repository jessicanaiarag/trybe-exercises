const rescue = require('express-rescue');
const service = require('../services/cep');
const Joi = require('joi');

const findAddressByCep = rescue(async (req, res, next) => {
    const { cep } = req.params;

    const address = await service.findAddressByCep(cep);

    if (address.error) {
        return next(address.error);
    }

    return res.status(200).json(address);
});

const create = rescue(async (req, res, next) => {
    // armazenamos essa parte do schema do Joi para reutiliza-la
    const requiredNonEmptyString = Joi.string().not().empty().required();
    // validamos o corpo da request
    const { error } = Joi.object({
        cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
        logradouro: requiredNonEmptyString,
        bairro: requiredNonEmptyString,
        localidade: requiredNonEmptyString,
        uf: requiredNonEmptyString.length(2),
    }).validate(req.body);

    // caso haja erro de validação, iniciamos o fluxo de erro
    if (error) return next(error);

    // caso não haja erro de validação, pedimos para o service criar o cep
    const newCep = await service.create(req.body);

    // caso o service nos retorne um erro
    if (newCep.error) {
        // iniciamos o fluxo de erro
        return next(newCep.error);
    }

    // caso contrario, retornamos o status 201 created o novo cep em fomato json
    res.status(201).json(newCep);
});

module.exports = { 
    findAddressByCep,
    create,
 };