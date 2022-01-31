const express = require("express");
const bodyParser = require("body-parser");
const author = require('./models/author');
const app = express()

app.use(bodyParser.json());

app.get('/authors', async(req, res) => {
    const authors = await author.getAll();
    res.status(200).json(authors);
}); 

app.get('/authors/:id', async (req, res) => {
    const { id } = req.params;
    const author = await author.findById(id);
    if (!author) return res.status(404).json({ message:'Not found' });
    res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
    const { first_name, middle_name, last_name } = req.body;
    if (!Author.isValid(first_name, middle_name, last_name)) {
        return res.status(400).json({ message: 'Dados inválidos' });
    }
    await Author.create(first_name, middle_name, last_name);
    res.status(201).json({ message: 'Autor criado com sucesso! '});
});

const PORT = process.env.PORT || 3000;

app.listen(port, () => console.log(`Example app listening on port port!`));