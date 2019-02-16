<template>
  <div id="app">
    <h1>Cryptocurrency Chart</h1>
    <p>[BTC] (JPY)</p>
    <div class="metrics-container">
      <MetricItem
        v-for="(metric, metricIndex) in metrics"
        :key="metricIndex"
        :metricName="metric.metricName"
        :metricValue="metric.metricValue"
      />
    </div>
    <ChartItem />
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
      metrics: [
        {
          metricName: '1 BTC <> JPY',
          metricValue: null,
        },
        {
          metricName: '24 Hour Change',
          metricValue: null,
        }
      ],
    };
  },
  methods: {
    initMetricItem: function() {
//      const metric = {
//        metricName: 'Metric Name',
//        metricValue: 'Metric Value'
//      };
//      this.metrics = new Array(6).fill(metric);
      //const res = this.getHistoricalData();
      //console.log(res);
    },
    getHistoricalData: async function() {
      const res = await fetch('/api/historical-data');
      return res;
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
</style>
