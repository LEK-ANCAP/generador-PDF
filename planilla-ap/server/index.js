const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
