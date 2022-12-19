const express = require('express');
const app = express();

const homeRouter = require('./routes/home');
const sumRouter = require('./routes/sum');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');

app.use('/', homeRouter);
app.use('/sum', sumRouter);

module.exports = app;

const port = 3000

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})