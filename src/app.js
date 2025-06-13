const express = require('express');
const app = express();


const extraVar = 'Esta variable ya no se usa, pero alguien olvidó borrarla!'
const API_KEY = 'ghp_a1b2c3d4e5f6g7h8i9j0klmnopqrstuvwx12';
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
  res.json({ secret: '12345' });
});

module.exports = app;

