const getHistoricalData = function() {
  //https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=JPY&api_key=20ecd2849b8b3975d1202e6d7675737abac87b694ad665c6036b89858ed6cfdd
  //@return { "JPY": nnnnn.nn }
  return Promise.resolve({});
};

const getMarketInformation = function() {
  return Promise.resolve({});
};

module.exports = {
  getHistoricalData,
  getMarketInformation,
};
