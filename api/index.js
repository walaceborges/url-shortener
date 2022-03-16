require('dotenv').config();
const express = require('express');
const urlRouter = require('./routes/urlRoutes')

const app = express();

app.use(express.json());

app.use('/', urlRouter);

app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');
});