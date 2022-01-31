const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();

app.use(bodyParser.json());

const books = [
    {id: 1, title: 'The Lord of Rings', author: 'J.R.R. Tolkien' },
    {id: 2, title: 'Dune', author: 'Frank Herbert' },
    {id: 3, title: 'Fundation', author: 'Isaac Asimov' },
    {id: 4, title: 'The Man in the high castle ', author: 'Philip K Dick' },
    {id: 5, title: '1984', author: 'George Orwell' },
    {id: 6, title: 'Brave New World', author: 'Aldous Huxley' },
    {id: 7, title: '7 minutos Depois da Meia noite', author: 'Patrick Ness' },

]
  
/**
*Obtendo dados do cliente
*Parametros (/books/:id -> req.params contem a chave `id`)
*Headers (Accept: application/json) -> req.headers contem a chave `accept`
*Query (?page=2) -> req.query contem a chave `page`
*Body ({title: 'lalala', author: 'fulano'}) -> req.body contem as chaves `title` e `author` 
*/

app.get('/books', (req, res) => {
    res.status(200).json({ books });
});

app.get('/books/search', (req, res)=> {
    const { author } = req.query;
    const filteredBooks = books.filter((book) => book.author.includes(author));

    res.status(200).json({ books: filteredBooks });
})

app.post('/books', (req, res) => {
    const { title, author } = req.body;

    if (!title || !author) {
        return res
        .status(422)
        .json({ error: true, message: 'Missing title or author' });
    }

    const newId = books[books.length -1].id + 1;
    
    const newBook = {
        id: newId,
        title,
        author,
    };

    books.push(newBook);

    res.status(201).json(newBook)
});

app.put('/books/:id', (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;
    if (!title || !author) {
        return res
        .status(422)
        .json({ error: true, message: 'missing title or author' });
    }
    const bookIndex = books.findIndex((book) => `${book.id}` === id);
    const book = books[bookIndex];
    if (!bookIndex || !book) {
        return res
        .status(404)
        .json({ error: true, message: `book with id ${id} does not exist`});
    }
    book.title = title;
    book.author = author;

    books[bookIndex] = book;

    res.status(200).json(book);
});

app.delete('/books/:id', (req, res) => {
    const { id } = req.params;

    const bookIndex = books.findIndex(book => `${book.id}` === id);
    
    if (bookIndex === -1) {
        return res.status(204).end();
    }

    books.splice(bookIndex, 1);

    res.status(204).end();

});

app.listen(3000, () => console.log(`Escutando na porta 3000`))