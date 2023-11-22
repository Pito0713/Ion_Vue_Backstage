<script setup>
import { computed, defineComponent, ref } from "vue";
import { shuffle } from "lodash";
import { DoughnutChart, useDoughnutChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
const dataValues = ref([30, 40]);
const dataLabels = ref(["Paris", "Nîmes"]);

const testData = computed(() => ({
  labels: dataLabels.value,
  datasets: [
    {
      data: dataValues.value,
      backgroundColor: [
        "#77CEFF",
        "#0079AF",
        "#123E6B",
        "#97B0C4",
        "#A5C8ED",
      ],
    },
  ],
}));

const options = computed(() => ({
  scales: {

  },
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js",
    },
  },
}));

const { doughnutChartProps } = useDoughnutChart({
  chartData: testData,
  options,
});

</script>

<template>
  <el-card class="container">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
        <el-button class="button" text>
          <el-icon>
            <Refresh />
          </el-icon>
        </el-button>
      </div>
    </template>

    <DoughnutChart v-bind="doughnutChartProps" />
  </el-card>
</template>

<style lang="scss" scoped>
@import "./style";
</style>