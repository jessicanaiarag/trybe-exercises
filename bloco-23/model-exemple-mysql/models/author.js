const connection = require('./connection');

const getNameAuthor = ({ id, firstName, middleName, lastName }) => {
    const fullName = [firstName, middleName, lastName].filter((name) => name).join(" ");
    return {
        id,
        firstName,
        middleName,
        lastName,
        fullName
    }
}

const serialLize = (authorData) => {
    return {
        id: authorData.id,
        firstName: authorData.first_name,
        middleName: authorData.middle_name,
        lastName: authorData.last_name
    }
}

const getAll = async () => {
    const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');
    return authors.map(serialLize).map(getNameAuthor);
}

module.exports = {
    getAll,
};