const CoinGecko = require('coingecko-api');

const CoinGeckoClient = new CoinGecko();

exports.getCoins = async (currency) => {
  try {
    const resp = await CoinGeckoClient.coins.markets({
      vs_currency: currency,
      ids: ['bitcoin,ethereum,tether,bitcoin-cash,monero,tron,dash,ethereum-classic,neo,zcash,icon']
    });
    return resp.data;
  } catch (err) {
    console.log(err);
  }
};
