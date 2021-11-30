const { getComissionRates, addComission } = require('./util/comissionhandler');
const { getCoins } = require('./util/coingecko');

let interval = null;

module.exports = (socket) => {
  console.log("New user connected");

  socket.on('currencyChange', (data) => {
    const { new_currency } = data;
    if (interval) {
      clearInterval(interval);
    }
    interval = setInterval(async () => {
      const coins = await getCoins(new_currency);
      const rates = await getComissionRates();
      const updateRes = addComission(rates, coins);
      socket.emit('update', updateRes);
    }, 60000);
  });
}