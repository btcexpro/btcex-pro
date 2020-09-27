const axios = require('axios');

const binURL = `https://api.jsonbin.io/b/${process.env.BIN_ID}/latest`;
const JSONBIN_API_SECRET = process.env.JSONBIN_API_SECRET;

let RATES = null;

exports.getComissionRates = async () => {
  try {
    const time = new Date();
    const min = time.getMinutes();
    if (min % 5 === 0 && RATES) {
      return RATES;
    }
  
    const params = {
      headers: {
        "secret-key": JSONBIN_API_SECRET,
      }
    };
    
    const res = await axios.get(binURL, params);
    RATES = res.data;
    return RATES;
  } catch (err) {
    console.log(err);
    // if api fails return last fetched rates
    return RATES;
  }
};

exports.addComission = (rates, coins) => {
  return coins.map(coin => {
    if (rates[coin.symbol.toUpperCase()] !== undefined) {
      return {
        id: coin.id,
        symbol: coin.symbol,
        name: coin.name,
        image: coin.image,
        ask: (coin.current_price * ((100 - rates[coin.symbol.toUpperCase()].BUY) / 100)),
        bid: (coin.current_price * ((100 + rates[coin.symbol.toUpperCase()].SELL) / 100)),
      };
    }
  }).sort((a, b) => a.symbol.localeCompare(b.symbol));
}
