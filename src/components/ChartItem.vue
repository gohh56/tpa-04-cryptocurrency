<template>
    <div>TODO: Chart</div>
</template>
<script>
import { Line, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;

export default {
  name: 'ChartItem',
  mixins: [reactiveProp],
  props: {
    chartdata: {
      type: Object,
      require: true
    },
    options: {
      type: Object
    }
  },
  mounted () {
    this.renderChart(this.chartdata, this.options);
  } 
};
// Chart data = 1分ごとのレート値
</script>
<style>

</style>
