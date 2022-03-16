require('dotenv').config();
const express = require('express');
const cors = require('cors')
const urlRouter = require('./routes/urlRoutes')

const app = express();

app.use(express.json());

app.use(cors())

app.use('/', urlRouter);

app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');
});