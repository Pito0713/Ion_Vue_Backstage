<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const handleClose = (done) => {
  router.push('/loginPage');
}
</script>

<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </el-card>
  <el-button type="primary" @click="handleClose">
    Confirm
  </el-button>
</template>

<style lang="scss" scoped>
@import "./style";
</style>