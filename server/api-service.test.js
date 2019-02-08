const { getHistoricalData, getMarketInformation } = require('./api-service');

describe('getHistoricalData', () => {
  test('should return an object', async () => {
    const historicalData = await getHistoricalData('BTC', 'JPY');
    expect(historicalData).toBeDefined();
    expect(typeof historicalData).toBe('object');
  });
  test('should have correct properties', async () => {
    const historicalData = await getHistoricalData('BTC', 'JPY');
    expect(historicalData[0]).toHaveProperty('time');
    expect(historicalData[0]).toHaveProperty('close');
    expect(historicalData[0]).toHaveProperty('high');
    expect(historicalData[0]).toHaveProperty('low');
  });
  test('should have 1440 chartData elements', async () => {
    const historicalData = await getHistoricalData('BTC', 'JPY');
    expect(historicalData).toHaveLength(1441);
  });
});

describe('getMarketInformation', () => {
  test('should return an object', async () => {
    const marketInfomation = await getMarketInformation('BTC', 'JPY');
    expect(marketInfomation).toBeDefined();
    expect(typeof marketInfomation).toBe('object');
  });
  test('should have correct properties', async () => {
    const marketInfomation = await getMarketInformation('BTC', 'JPY');
    expect(marketInfomation).toHaveProperty('volume_24h');
    expect(marketInfomation).toHaveProperty('market_cap');
  });
});