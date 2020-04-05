const { getComissionRates, addComission } = require('./util/comissionhandler');
const { getCoins } = require('./util/coingecko');

module.exports = (socket) => {
  console.log("New user connected");
  setInterval(async () => {
    const coins = await getCoins('hkd');
    const rates = await getComissionRates();
    const updateRes = addComission(rates, coins);
    socket.emit('update', updateRes);
  }, 60000);
}