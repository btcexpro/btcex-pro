const axios = require('axios');

const binURL = "https://api.jsonbin.io/b/5e89bda185182d79b063e1ad";
const API_KEY = "$2b$10$OH1Y7fRnO760sJQfsYIl4uxoppBNa/LMZ8Q2cpOUxiR48Ly61DERW";

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
        "secret-key": API_KEY,
      }
    };
    
    const res = await axios.get(binURL, params);
    RATES = res.data;
    return RATES;
  } catch (err) {
    console.log(err);
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
        ask: (coin.current_price + coin.current_price * rates[coin.symbol.toUpperCase()].BUY),
        bid: (coin.current_price - coin.current_price * rates[coin.symbol.toUpperCase()].SELL),
      };
    }
  }).sort((a, b) => a.symbol.localeCompare(b.symbol));
}