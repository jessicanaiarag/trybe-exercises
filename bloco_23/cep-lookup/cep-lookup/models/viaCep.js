const fetch = require('node-fetch');

const lookUpCep = async (cepToLookUp) => {
    const response = await fetch(`http://viacep.com.br/ws/${cepToLookUp}/json/`);

    if (!response.ok) return null;

    const address = await response.json();

    if (address.erro) return null;

    return address;
};

module.exports = {
    lookUpCep,
};