const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'output')));

app.listen(PORT, () => {
  console.log(`📡 Servidor activo en: http://localhost:${PORT}`);
});

