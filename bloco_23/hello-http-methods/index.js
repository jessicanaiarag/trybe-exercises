const fetch = require('node-fetch');

// armazenamos o token numa variavel
// num ambiente real, esse valor viria do local storage, ou de uma variavel de ambiente
const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';

// criamos um novo objeto de headers
const headers = new fetch.Headers({
    Autorization: API_TOKEN, 
    //precisamos adicionar o header content-type e defini-lo como application/json
    'Content-Type': 'application/json',
});

// depois criamos o body, utilizamos o stringfy para que possamos enviar esse body como json
const body = JSON.stringify({
    name: 'Tryber',
    email: 'tryber@betrybe.com',
    password: 'Tr1b3r'
}); 


// para aquecer, vamos começar com uma requisição do tipo get
fetch('https://postman-echo.com/get?param1=teste', {
    // passamos o objeto de headers como parametro para o fetch
    headers,
    method: 'POST'
 })
    .then((response) => {
        // ao receber a resposta, verificamos se ocorreu tudo bem
        if (!response.ok) {
        // caso não, forçamos a promise a ser rejeitada
        return Promise.reject(response);
        }
        // caso esteja tudo ok, lemos o body como json
        return response.json();
    })
    .then((data) => {
        // por fim, escrevemos o body no console
        console.log(data);
    })
    .catch((errorOrResponse) => {
        // em caso de falha simples (a request completou com um status diferente de 2xx)
        // simplesmente logamos o status no console
        if (errorOrResponse.status) {
            return console.error(`Request failed with status ${errorOrResponse.status}`);
        } 
        // caso tenha acontecido um erro de rede (não foi possivel completar a request)
        // logamos o erro todo
        console.log(errorOrResponse);
    });