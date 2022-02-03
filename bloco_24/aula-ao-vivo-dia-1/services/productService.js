const { product } = require('../models');

const getAll = async () => {
    const products = await Product.findAll();

   return products.map((product) => product.dataValues);
};

const getById = async (id) => {
    // Todo: Subistituir pela busca de um produto com o model
    const product = id === '1'
    ? {
        name: 'fake product',
        description: 'fake product description', 
    }
    : null;
    if (!product) {
        const error = new Error();
        error.message = 'Product not found';
        error.code = 'NotFound';
        throw error;
    }
    return product;
};

const create = async (name, description) => {

}