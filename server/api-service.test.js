const { getHistoricalData, getMarketInformation } = require('./api-service');

describe('getHistoricalData', () => {
  let historicalData;
  beforeAll(async() => {
    historicalData = await getHistoricalData('BTC', 'JPY');
  });
  test('should return an object', () => {
    expect(historicalData).toBeDefined();
    expect(typeof historicalData).toBe('object');
  });
  test('should have correct properties', () => {
    expect(historicalData[0]).toHaveProperty('time');
    expect(historicalData[0]).toHaveProperty('close');
    expect(historicalData[0]).toHaveProperty('high');
    expect(historicalData[0]).toHaveProperty('low');
  });
  test('should have 1440 chartData elements', () => {
    expect(historicalData).toHaveLength(1441);
  });
});

describe('getMarketInformation', () => {
  let marketInfomation;
  beforeAll(async() => {
    marketInfomation = await getMarketInformation('BTC', 'JPY');
  });
  test('should return an object', () => {
    expect(marketInfomation).toBeDefined();
    expect(typeof marketInfomation).toBe('object');
  });
  test('should have correct properties', () => {
    expect(marketInfomation).toHaveProperty('volume_24h');
    expect(marketInfomation).toHaveProperty('market_cap');
  });
});