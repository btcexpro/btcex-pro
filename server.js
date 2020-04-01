const express = require("express");
const next = require("next");
const axios = require('axios');
const nextI18NextMiddleware = require('next-i18next/middleware').default;

const nextI18next = require('./i18n');

const port = parseInt(process.env.PORT, 10) || 5000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(nextI18NextMiddleware(nextI18next));

  server.get('/fees', (req, res) => {
    axios.get('http://localhost:3000/coins/markets')
      .then((response) => res.send(response.data))
      .catch((error) => console.log(error));
  });

  server.all('*', (req, res) => {
    return handle(req, res)
  });

  server.listen(port, err => {
    if (err) {
      throw err;
    }
    console.log(`>>> Ready on http://localhost:${port}`)
  });

}).catch((err) => {
  console.error(err.stack);
  process.exit(1);
});