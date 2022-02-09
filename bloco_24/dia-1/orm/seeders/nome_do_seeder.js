// bonus: crie um seeder usando o sequelize-cli, populando a sua base com pelo menos um livro;

module.exports = {
    up: async (queryInterface, _sequelize) => {
        await queryInterface.bulkInsert('Books',
            [{
                title: 'Christine',
                author: 'Stephen King',
                pageQuantity: 616,
                createdAt: new Date("2022-01-28T13:23:32.514Z"),
                updatedAt: new Date("2022-01-28T13:23:32.514Z"),
            },
            {
                title: 'Apanhador de sonhos',
                author: 'Stephen King',
                pageQuantity: 656,
                createdAt: new Date("2022-01-28T13:23:32.514Z"),
                updatedAt: new Date("2022-01-28T13:23:32.514Z"),
            },
            {
                title: 'A dança da morte',
                author: 'Stephen King',
                pageQuantity: 1248,
                createdAt: new Date("2022-01-28T13:23:32.514Z"),
                updatedAt: new Date("2022-01-28T13:23:32.514Z"),
            }]
        );
    },
    down: async (queryInterface, _sequelize) => {
        await queryInterface.bulkDelete('Books', null, {});
    },
};