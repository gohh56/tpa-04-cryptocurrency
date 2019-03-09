<template>
  <div id="app">
    <h1>Cryptocurrency Chart</h1>
    <p>[{{ cryptocurrency }}] ({{ target }})</p>
    <div class="metrics-container">
      <MetricItem
        v-for="(metric, metricIndex) in metrics"
        :key="metricIndex"
        :metricName="metric.metricName"
        :metricValue="metric.metricValue"
      />
    </div>
    <div class="chart-container">
      <ChartItem
        v-if="loaded"
        :chart-data-label="chartDataLabel"
        :chart-data-value="chartDataValue"
        :chart-labels="cryptocurrency"
      />
    </div>
    <h5>TECH PLAY ACADEMY</h5>
  </div>
</template>

<script>
import MetricItem from './components/MetricItem.vue';
import ChartItem from './components/ChartItem.vue';

export default {
  name: 'App',
  components: {
    MetricItem,
    ChartItem
  },
  data: function() {
    return {
      cryptocurrency: 'BTC',
      target: 'JPY',
      metrics: [],
      chartDataLabel: [],
      chartDataValue: [],
      loaded: false
    };
  },
  methods: {
    getHistoricalData: async function() {
      const url = `api/historical-data/?cryptocurrency=${this.cryptocurrency}&target=${this.target}`;
      const promise = await fetch(url);
      const historicalData = await promise.json();
      return historicalData;
    },
    getMarketInformation: async function() {
      const url = `/api/market-information/?cryptocurrency=${this.cryptocurrency}&target=${this.target}`;
      const promise = await fetch(url);
      const marketInfomation = await promise.json();
      return marketInfomation;
    },
    addMetrics: function(name, value) {
      const metric = {
        'metricName': name,
        'metricValue': value
      };
      this.metrics.push(metric);
    },
    initMetricItem: async function() {
      this.loaded = false;
      const historicalData = await this.getHistoricalData();
      this.addMetrics(`1 ${this.cryptocurrency} <> ${this.target}`, historicalData.latestValue);
      this.addMetrics('24 Hour Change', historicalData.changeInOneDay);
      this.addMetrics('24 Hour High', historicalData.highInOneDay);
      this.addMetrics('24 Hour Low', historicalData.lowInOneDay);
      historicalData.chartData.forEach(element => {
        this.chartDataLabel.push(element.time);
        this.chartDataValue.push(parseFloat(element.close));
      });
      this.loaded = true;
      const marketInfomation = await this.getMarketInformation();
      this.addMetrics('24 Hour Volume', marketInfomation.volumeInOneDay);
      this.addMetrics('Market Cap', marketInfomation.marketCap);
    }
  },
  mounted: function() {
    this.initMetricItem();
  }
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
}

.metrics-container {
  display: flex;
  justify-content: center;
}

.metric-container {
  background: #ccc;
  width: 120px;
  height: 50px;
  padding: 10px;
  margin: 10px;
}

.chart-container {
  width: 100vw;
  height: 100vh;
  margin: auto;
}
</style>
