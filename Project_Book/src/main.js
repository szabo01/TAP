const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const livrosRepo = require('./repositories/LivrosRepository');
const morgan = require('morgan');
const PORTA = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/auth', require('./controllers/autorizacao'));
app.use('/livros', require('./controllers/livros'));
app.get('*', (req, res) => res.send('404'));

let logStream = fs.createWriteStream(path.join(__dirname, '../logs/access.log'), {flags: 'a'})
app.use(morgan('combined', { stream: logStream }));

app.get('/', (req, res) => {
    let livros = livrosRepo.todos();
    res.render('index', {livros: livros});
})

app.listen(PORTA, () => {
    console.log('Aplicação rodando em http://localhost:' + PORTA);
});