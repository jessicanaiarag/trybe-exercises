const express = require('express');
const bodyParser = require('body-parser');

const booksController = require('./controllers/booksController');
// Bônus: crie um endpoint para buscar o livro por author (pode adaptar algum que já exista).
const authorController = require('./controllers/authorController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/books', booksController.getAll);
app.get('/books/:id', booksController.getById);
app.get('/author/:name', authorController.getByAuthorName);//bonus.
app.post('/books', booksController.createNew);
app.post('/books/:id', booksController.updateById);
app.delete('/books/:id', booksController.deleteId);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));






