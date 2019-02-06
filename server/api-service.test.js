const { getHistoricalData, getMarketInformation } = require('./api-service');

describe('getHistoricalData', () => {
  let historicalData;
  beforeAll(() => {
    historicalData = getHistoricalData('BTC', 'JPY');
  });
  test('should return an object', () => {
    expect(historicalData).toBeDefined();
    expect(typeof historicalData).toBe('object');
  });
  //test('should have correct properties', () => {
  //  expect(historicalData).toHaveProperty('latestValue');
  //  expect(historicalData).toHaveProperty('changeInOneDay');
  //  expect(historicalData).toHaveProperty('highInOneDay');
  //  expect(historicalData).toHaveProperty('lowInOneDay');
  //  expect(historicalData).toHaveProperty('chartData');
  //  expect(historicalData.chartData).toHaveProperty('time');
  //  expect(historicalData.chartData).toHaveProperty('close');
  //});
  //test('should have 1440 chartData elements', () => {
  //  expect(historicalData.chartData.length).toBe(1440);
  //});
});