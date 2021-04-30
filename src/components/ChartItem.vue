<script>
import { Line } from 'vue-chartjs';

export default {
  name: 'ChartItem',
  extends: Line,
  props: {
    chartDataLabel: {
      type: Array,
      required: true
    },
    chartDataValue: {
      type: Array,
      required: true
    },
    chartLabels: {
      type: String
    }
  },
  data: function() {
    return {
      chartData: {
        labels: this.chartDataLabel,
        datasets: [
          {
            label: this.chartLabels,
            backgroundColor: 'rgba(54,164,235,0.5)',
            pointBackgroundColor: 'rgba(54,164,235,0.8)',
            data: this.chartDataValue
          }
        ]
      },
      options: {
        maintainAspectRatio: false
      }
    };
  },
  mounted: function() {
    this.renderChart(this.chartData, this.options);
  }
};
</script>
<style>

</style>
