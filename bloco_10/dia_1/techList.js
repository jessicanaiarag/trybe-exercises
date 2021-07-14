const techList = (techs, name) => {
    if (techs && techs.length === 0){
        return 'Vazio!';
    }
    const lista = techs.sort().map((tech) => (
        {
            tech,
            name
        }
    ))
    return lista;
}

module.exports = techList; 