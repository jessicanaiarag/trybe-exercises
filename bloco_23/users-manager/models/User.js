// começamos importando a conexão com o banco 
const connection = require('./connection');

// faremos a função 'formatUser', note que não realizamos destruction da senha, pois não 
// precisaremos dela, note tambem que renomeamos os campos first_name e last_name para 
// firstName e lastName, respectivamente
function formatUser({ id, first_name: firstName, last_name: lastName, email }) {
    // a unica coisa que precisamos fazer é criar um objeto com os nomes dos campos 
    // alterados e sem o campos passoword

    return {
        id,
        firstName,
        lastName,
        email
    };
};

// função responsavel por criar o usuário no banco de dados
function create ({ firstName, lastName, email, password}) {
    const query = 'INSERT INTO users(first_name, last_name, email, password) VALUES (?,?,?,?)';
// ao inves de chamarmos connection como ama function, agora utilizamos diretamente o método 'execute'
return connection.execute(query, [firstName, lastName, email, password])
// obtemos o resultado da inserção e o utilizamos para obter o ID recém inserido
.then(([result]) => ({ id: result.insertId, firstName, lastName, email }));
};

function findAll() {
    // mais uma vez, chamamos connection.execute para executar nossa query
    return connection.execute('SELECT * FROM users;')
    // passamos cada resultado pela função de formatação
    .then(([results]) => results.map(formatUser));
};

async function findById(id) {
    // realizamos uma consulta buscando o usuário por ID
    const user = await connection.execute('SELECT * FROM users WHERE id = ?', [id])
    // caso nenhum resultado seja encontrado, transformamos `user` em `null`
    .then(([results]) => (results.length ? results[0] : null ));
    // caso o usuário tenha sido encontrado, retornamos seus dados formatados:
    return formatUser(user);
};

async function UpdateUser(id, { firstName, lastName, email, password }) {
    // primeiro executamos a query de atualização
    const query = 'UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ?, WHERE id = ? ';
   await Connection.execute(query, [firstName, lastName, email, password, id]);
   // por fim, buscamos o usuário, utilizando o metodo 'findById' e o retornamos.
   // não precisamos nos preocupar em formatar os dados, ou em verificar se o usuário de fato existe,
   // já que findById já faz isso pra nós.
   return findById(id);
};