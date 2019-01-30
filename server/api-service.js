const getHistoricalData = function() {
  //Request
  //GET
  //url: https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=JPY&limit=1440
  //header: [
  //  x-api-key: API_KEY
  //  Content-Type: application/x-www-form-urlencoded
  //]
  //Response
  //{
  //    "Response": "Success",
  //    "Type": 100,
  //    "Aggregated": false,
  //    "Data": [
  //        {
  //            "time": 1548840840,
  //            "close": 372994.27,
  //            "high": 373098.37,
  //            "low": 372991.43,
  //            "open": 373042.35,
  //            "volumefrom": 5.35,
  //            "volumeto": 1996198.87
  //        },
  //        {
  //            "time": 1548840900,
  //            "close": 372973.86,
  //            "high": 372994.27,
  //            "low": 372973.86,
  //            "open": 372994.27,
  //            "volumefrom": 0,
  //            "volumeto": 0
  //        }
  //    ],
  //    "TimeTo": 1548840900,
  //    "TimeFrom": 1548840840,
  //    "FirstValueInArray": true,
  //    "ConversionType": {
  //        "type": "direct",
  //        "conversionSymbol": ""
  //    },
  //    "RateLimit": {},
  //    "HasWarning": false
  //}
  return Promise.resolve({});
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
