const express = require('express');
const app = express();
app.disable("x-powered-by");

const homeRouter = require('./routes/home');
const operationsRouter = require('./routes/operations');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');

app.use('/', homeRouter);
app.use('/operations', operationsRouter);

module.exports = app;
