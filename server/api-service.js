const fetch = require('node-fetch');
const { HISTRICAL_API_KEY } = require('./constants.js');

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
      'x-api-key': HISTRICAL_API_KEY,
      'Content-Type': 'application/json; charset=utf-8'
    }
  };
  return fetch(url, options)
    .then(res => res.json())
    .then(data => data.Data);
};

const getMarketInformation = function() {
  //Request
  //GET
  //URL https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC&convert=JPY
  //header:[
  //  X-CMC_PRO_API_KEY: API_KEY
  //]
  //Response
  //  {
  //    "status": {
  //        "timestamp": "2019-01-30T10:36:13.271Z",
  //        "error_code": 0,
  //        "error_message": null,
  //        "elapsed": 10,
  //        "credit_count": 1
  //    },
  //    "data": {
  //        "BTC": {
  //            "id": 1,
  //            "name": "Bitcoin",
  //            "symbol": "BTC",
  //            "slug": "bitcoin",
  //            "circulating_supply": 17509450,
  //            "total_supply": 17509450,
  //            "max_supply": 21000000,
  //            "date_added": "2013-04-28T00:00:00.000Z",
  //            "num_market_pairs": 6450,
  //            "tags": [
  //                "mineable"
  //            ],
  //            "platform": null,
  //            "cmc_rank": 1,
  //            "last_updated": "2019-01-30T10:35:25.000Z",
  //            "quote": {
  //                "JPY": {
  //                    "price": 378658.5531330498,
  //                    "volume_24h": 610048205393.2592,
  //                    "percent_change_1h": 0.0605,
  //                    "percent_change_24h": 1.0797,
  //                    "percent_change_7d": -3.9824,
  //                    "market_cap": 6630103003155.4795,
  //                    "last_updated": "2019-01-30T10:36:00.000Z"
  //                }
  //            }
  //        }
  //    }
  //}
  return Promise.resolve({});
};

module.exports = {
  getHistoricalData,
  getMarketInformation,
};
