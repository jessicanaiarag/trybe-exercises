module.exports = ( err, req, res, _next) => {
    if (err.isJoi) {
        return res.status(400)
        .json({ error: { message: err.details[0].message }});
    }

    // verificamos se esse é um erro de domínio
    if (err.code) {
        const statusbyErrorCode = {
            notFound: 404,
            alreadyExists: 409,
        };
        // usamos o codigo de erro para determinar qual o status code adequado
        const status = statusbyErrorCode[err.code] || 500;
        // enviamos o status code e o erro como resposta
        res.status(status).json(err);
    }
    // caso não seja um erro de dominio, enviamos uma resposta de erro desconhecido
    console.log(err);
    res.status(500).json({ error: { code: 'internal', message: 'Internal server error'}});
};