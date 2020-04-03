const express = require("express");
const http = require('http');
const next = require("next");
const axios = require('axios');
const CoinGecko = require('coingecko-api');
const nextI18NextMiddleware = require('next-i18next/middleware').default;

const nextI18next = require('./i18n');
const { getComissionRates, addComission } = require('./comissionhandler');

const port = parseInt(process.env.PORT, 10) || 5000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const CoinGeckoClient = new CoinGecko();
app.prepare().then(() => {
  
  const server = express();
  const httpServer = http.Server(server);
  const io = require('socket.io')(httpServer);
  io.on('connection', function(socket) {
    console.log('a user connected');
  });

  server.use(nextI18NextMiddleware(nextI18next));

  server.get('/fees', async (req, res) => {
    const { vs_currency } = req.query;
    try {
      let resp = await CoinGeckoClient.coins.markets({
        vs_currency,
        ids: ['bitcoin,ethereum,tether,bitcoin-cash,monero,tron,dash,ethereum-classic,neo,zcash,icon']
      });
      const coins = resp.data;
      const rates = await getComissionRates();
      const finalRes = addComission(rates, coins);
      res.status(200).send(finalRes);
    } catch(err) {
      res.status(400).send(err);
    }
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