const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello, DevOps World!');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

