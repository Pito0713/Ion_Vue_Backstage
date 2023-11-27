<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const handleClose = (done) => {
  router.push('/recordPage');
}
</script>

<template>
  <el-button type="primary" @click="handleClose">
    Confirm
  </el-button>
</template>

<style lang="scss" scoped>
@import "./style";
</style>