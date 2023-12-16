const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Art Gallery!');
});

app.listen(port, () => {
  console.log(`Art gallery app listening at http://localhost:${port}`);
});
