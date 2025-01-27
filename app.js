const express = require('express');
const app = express();
const server = app.listen(3000);

app.get('/', (req, res) => {
  res.send('Hello, CI/CD!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

module.exports = app;
