const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const API_KEY = process.env.API_KEY;
app.use(express.json());

app.get('/', (req, res) => {
  console.log('Solicitud recibida');
  res.send('API Insegura funcionando');
});


app.get('/secure-data', (req, res) => {
  const key = req.headers['x-api-key'];
  if (key !== API_KEY) {
    return res.status(403).json({ error: 'Acceso denegado' });
  }
  res.json({secret: '123456'});
});

module.exports = app;

