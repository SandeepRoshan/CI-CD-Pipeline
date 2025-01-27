const express = require('express');
const app = express();
const port = process.env.PORT || 3000;  // Use the port from environment or default to 3000

app.get('/', (req, res) => {
  res.send('Hello, CI/CD!');
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
  });
}

module.exports = app;
