module.exports = (err, req, res, _next) => {
    // caso o erro possua uma propriedade "status", devolvemos esse "status" com a msg de erro
    if (err.status) {
        return res.status(err.status).json( {message: err.message });
    }

    // caso o erro seja um erro do Joi
    if (err.isJoi) {
        // devolvemos o status 400 bad request com a msg de erro que Joi gerou
        return res.status(400).json({ message: err.datails[0].message });
    }

    // caso o erro não seja de nenhum dos dois tipos acima, ele é um erro desconhecido
    
    // imprimimos o erro no console p q possamos debuga-lo
    console.log(err);
    // retornamos o status 500 internal server error, uma msg avisando q houve um erro.
    res.status(500).json({ message: 'Erro interno do servidor' });

};