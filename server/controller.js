const moment = require('moment-timezone');
const numeral = require('numeral');

/** set historical data for client from API response
 * @function
 * @param {Array} historicalData - array from 'https://min-api.cryptocompare.com/' API
 * @return {Object} - historical data for client
 */
const setHistoricalData = function(historicalData) {
  const historicalResData = {
    'latestValue': null,
    'changeInOneDay': null,
    'highInOneDay': null,
    'lowInOneDay': null,
    'chartData': []
  };
  historicalResData.latestValue = numeral(historicalData[historicalData.length - 1].close).format('0,0.00');
  let changeValue = historicalData[historicalData.length - 1].close - historicalData[0].close;
  historicalResData.changeInOneDay = numeral(changeValue).format('0,0.00');
  let highValue = 0;
  let lowValue = historicalData[0].low;

  historicalData.forEach((data) => {
    if (data.high > highValue) highValue = data.high;
    if (data.low < lowValue) lowValue = data.low;
    historicalResData.chartData.push({
      'time': moment(data.time,'X').tz('Asia/Tokyo').format(),
      'close': numeral(data.close).format('0,0.00'),
    });
  });
  historicalResData.highInOneDay = numeral(highValue).format('0,0.00');
  historicalResData.lowInOneDay = numeral(lowValue).format('0,0.00');
  return historicalResData;
};

module.exports = {
  setHistoricalData
};