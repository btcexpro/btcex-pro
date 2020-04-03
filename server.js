const express = require("express");
const next = require("next");
const axios = require('axios');
const nextI18NextMiddleware = require('next-i18next/middleware').default;

const nextI18next = require('./i18n');

const port = parseInt(process.env.PORT, 10) || 5000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const fees = {
  'BTC': {
    'BUY': 0.01,
    'SELL': 0.01
  },
  'BCH': {
    'BUY': 0.01,
    'SELL': 0.01
  },
  'DASH': {
    'BUY': 0.01,
    'SELL': 0.01
  },
  'ETC': {
    'BUY': 0.01,
    'SELL': 0.01
  },
  'ETH': {
    'BUY': 0.01,
    'SELL': 0.01
  },
  'USDT': {
    'BUY': 0.01,
    'SELL': 0.01
  },
  'ICX': {
    'BUY': 0.01,
    'SELL': 0.01
  },
  'NEO': {
    'BUY': 0.01,
    'SELL': 0.01
  },
  'TRX': {
    'BUY': 0.01,
    'SELL': 0.01
  },
  'XMR': {
    'BUY': 0.01,
    'SELL': 0.01
  },
  'ZEC': {
    'BUY': 0.01,
    'SELL': 0.01
  },
};

app.prepare().then(() => {
  const server = express();

  server.use(nextI18NextMiddleware(nextI18next));

  server.get('/fees', (req, res) => {
    const {vs_currency} = req.query;
    const queryObj = {
      vs_currency,
      ids: 'bitcoin,ethereum,tether,bitcoin-cash,monero,tron,dash,ethereum-classic,neo,zcash,icon'
    };
    axios.get('https://api.coingecko.com/api/v3/coins/markets', { params: queryObj })
      .then((response) => {
        const result = response.data;
        const finalRes = result.map(item => {
          if (fees[item.symbol.toUpperCase()] !== undefined) {
            return {
              id: item.id,
              symbol: item.symbol,
              name: item.name,
              image: item.image,
              ask: (item.current_price + item.current_price * fees[item.symbol.toUpperCase()].BUY),
              bid: (item.current_price - item.current_price * fees[item.symbol.toUpperCase()].SELL),
            };
          }
        }).sort((a, b) => a.symbol.localeCompare(b.symbol));
        res.status(200).send(finalRes);
      })
      .catch((error) => res.status(400).send(error));
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