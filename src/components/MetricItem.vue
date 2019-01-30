<template>
      <div class="metric-container">
        <div class="metric-label">{{ metricName }}</div>
        <div class="metric-value">{{ metricValue }}</div>
      </div>
</template>
<script>
export default {
  name: 'MetricItem',
  props: {
    metricName: {
      type: String,
      required: true
    },
    metricValue: {
      type: String,
      required: true
    }
  }
};
</script>
<style>
.metric-container {
  background: #ccc;
  width: 120px;
  height: 50px;
  padding: 10px;
  margin: 10px;
}
</style>
