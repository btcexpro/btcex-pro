const express = require("express");
const http = require('http');
const next = require("next");
require('dotenv').config()
const { getComissionRates, addComission } = require('./util/comissionhandler');
const { getCoins } = require('./util/coingecko');
const socketHandler = require('./sockethandler');

const port = parseInt(process.env.PORT, 10) || 5000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

const httpServer = http.createServer(server);
const io = require('socket.io')(httpServer);

app.prepare().then(() => {

  server.get('/fees', async (req, res) => {
    const { vs_currency } = req.query;
    try {
      // const coins = await getCoins(vs_currency);
      // const rates = await getComissionRates();
      // const finalRes = addComission(rates, coins);
      res.status(200).send([]);
    } catch(err) {
      res.status(400).send(err);
    }
  });

  io.on('connect', socketHandler);

  server.all('*', (req, res) => {
    return handle(req, res)
  });

  httpServer.listen(port, err => {
    if (err) {
      throw err;
    }
    console.log(`>>> Ready on http://localhost:${port}`)
  });

}).catch((err) => {
  console.error(err.stack);
  process.exit(1);
});