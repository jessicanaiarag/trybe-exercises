const { get } = require('express/lib/response');
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

const findById = async (id) => {
    const [authorData] = await connection.execute(
        'SELECT id, first_name, middle_name, last_name FROM authors WHERE id=?',
        [id]
    );
    if (authorData.length === 0) return null;
    const { firstName, middleName, lastName } = authorData.map(serialLize)[0];
    return getNewAuthor({
        id,
        firstName,
        middleName,
        lastName
    });
};

const isValid = (firstName, middleName, lastName) => {
    if (!firstName || typeof firstName !== 'string') return false;
    if (!lastName || typeof lastName !== 'string') return false;
    if (middleName && typeof middleName !== 'string') return false;

    return true;
};

const create = async (firstName, middleName, lastName) => connection.execute(
    'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
    [firstName, middleName, lastName],
);

module.exports = {
    getAll,
    findById,
        isValid,
        create,
};