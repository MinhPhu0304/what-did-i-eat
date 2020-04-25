<script>
import { Pie } from 'vue-chartjs'
import { getChartDataLabel } from '../utils'

export default {
  extends: Pie,
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  mounted () {
    const chartConfig = getChartDataLabel(this.$props.data)
    this.renderChart(chartConfig.chartdata, chartConfig.options)
  }
}
</script>

<style>
</style>
