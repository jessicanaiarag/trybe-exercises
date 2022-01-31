const Author = require('../models/author');

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
    const fullName = [ firstName, middleName, lastName].filter((name) => name).join("");
    return {
        id, 
        firstName,
        middleName,
        lastName,
        fullName
    }    
}