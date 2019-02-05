const fetch = require('node-fetch');
require('dotenv').config();

/**
 * get BTC <> JPY historical data from https://min-api.cryptocompare.com
 * @function
 * @param {String} cryptocurrency
 * @param {String} target
 * @return {Object}
 */
const getHistoricalData = function(cryptocurrency, target) {
  const url = 'https://min-api.cryptocompare.com/data/histominute?' +
              `fsym=${cryptocurrency}&tsym=${target}&limit=1440`;
  const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'x-api-key': process.env.HISTRICAL_API_KEY,
      'Content-Type': 'application/json; charset=utf-8'
    }
  };
  return fetch(url, options)
    .then(res => res.json())
    .then(data => data.Data);
};

/**
 * get BTC <> JPY market infomation from https://pro-api.coinmarketcap.com
 * @function
 * @param {String} cryptocurrency
 * @param {String} target
 * @return {Object}
 */
const getMarketInformation = function(cryptocurrency, target) {
  const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/' + 
              `latest?symbol=${cryptocurrency}&convert=${target}`;
  const options = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-CMC_PRO_API_KEY': process.env.MARKET_API_KEY,
      'Content-Type': 'application/json; charset=utf-8'
    }
  };
  return fetch(url, options)
    .then(res => res.json())
    .then(data => data.data[cryptocurrency].quote[target]);
};

module.exports = {
  getHistoricalData,
  getMarketInformation,
};
