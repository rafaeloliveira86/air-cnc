const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');
const app = express();
mongoose.connect('mongodb+srv://reactapp:reactapp@cluster0-4eikh.mongodb.net/reactapp_db?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

/*app.get('/', (req, res) => {
    return res.send('Hello World');
});*/

/*app.post('/users', (req, res) => {
    return res.json({ message: "Hello World" });
});*/

// req.query = Acessar query params (Para filtros)
/*app.get('/users', (req, res) => {
    return res.json({ idade: req.query.idade });
});*/

// req.params = Acessar route params (Para editar e deletar)
/*app.put('/users/:id', (req, res) => {
    return res.json({ id: req.params.id });
});*/

// req.body = Acessar corpo da requisição (Para criar e editar)
/*app.post('/users', (req, res) => {
    return res.json(req.body);
});*/

//app.use(cors({ origin: 'http://localhost:3333' })); // Apenas aplicações dentro do endereço pode acessar a API
app.use(cors()); // Qualquer aplicação pode acessar a API
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);