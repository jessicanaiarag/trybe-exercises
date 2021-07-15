const pokeTips = (callback) => {
    setTimeout(() => {
        callback('Charmander é o melhor pokémon para começar.');
    }, 2000);
};

module.exports = pokeTips;