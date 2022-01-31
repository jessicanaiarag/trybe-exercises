// importamos a conexão com o banco
const connection = require('./connection');

// regex que identifica um cep já formatado
const CEP_REGEX = /\d{5}-\d{3}/;

// função que formata um cep
const formatCep = (cep) => {
    // caso o CEP já esteja formatado, retorna o proprio CEP
    if (CEP_REGEX.test(cep)) return cep;
    // caso não esteja formatado, utiliza regex para adicionar a formatação
    return cep.replace(/\d{5}-\d{3}/, '$1-$2');
};

// formata os campos para exibição 
const getNewCep = ({ cep, logradouro, bairro, localidade, uf }) => ({
    cep: formatCep(cep),
    logradouro,
    bairro,
    localidade,
    uf
});

const findAddressByCep = async (cepToSearch) => {
    // removemos todos os traços, pois armazemos o cep puro no banco
    const treateCep = cepToSearch.replace('-', '');
    const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?';
    // executamos a query, selecionando o primeiro resultado, caso exista
    // e assumindo 'null', caso contrario
    const result = await connection.execute(query, [treateCep])
    .then(([results]) => (results.length ? results[0] : null));
    // caso nenhum resultado seja encontrado, retornamos 'null'
    if (!result) return null;
    // retornamos os dados do CEP formatados pela função getNewCep
    return getNewCep(result);
};

const create = async ({ cep: rawCep, logradouro, bairro, localidade, uf }) => {
    // removemos o traço do cep para armazena-lo de forma limpa
    const cep = rawCep.replace(/-/ig, '');

    const query = 'INSERT TO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?,?,?,?,?)';
    // executamos a query
    await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);
    // depois de inserir, retornamos os dados, como sinal de que foram guardados no banco
    return { cep, logradouro, bairro, localidade, uf };
};

module.exports = {
    findAddressByCep,
    create,
};