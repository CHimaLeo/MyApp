const express = require('express');
const connectToMongoDB = require('./db');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const database = await connectToMongoDB();
    res.send(database);
  } catch (error) {
    console.error('Error en el servidor', error);
    res.status(500).send('Error en el servidor');
  }
});

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
