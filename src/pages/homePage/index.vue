<script setup>
import userCount from './userCount/userCount.vue'
import pieChart from './pieChart/pieChart.vue'
import barChart from './barChart/barChart.vue'

</script>

<template>
  <div class="container">
    <userCount />
    <pieChart />
    <barChart />
  </div>
</template>

<style lang="scss" scoped>
@import "./style";
</style>