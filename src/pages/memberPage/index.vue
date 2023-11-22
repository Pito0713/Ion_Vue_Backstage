<script setup>
import { ref } from 'vue'
const size = ref < 'default' | 'large' | 'small' > ('default')

const value1 = ref('')
const value = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
    disabled: true,
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<template>
  <el-select v-model="value" placeholder="Select">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
      :disabled="item.disabled" />
  </el-select>
  <div class="demo-date-picker">
    <div class="block">
      <span class="demonstration">Default</span>
      <el-date-picker v-model="value1" type="daterange" range-separator="To" start-placeholder="Start date"
        end-placeholder="End date" :size="size" />
    </div>
  </div>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="date" label="Date" width="100" />
    <el-table-column prop="name" label="Name" width="100" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<style lang="scss" scoped>
@import "./style";
</style>