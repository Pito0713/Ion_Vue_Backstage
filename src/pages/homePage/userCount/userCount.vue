<script setup>
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
    <div>
      <el-icon>
        <Male />
      </el-icon>
    </div>
    <div>
      <el-icon>
        <Female />
      </el-icon>
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
@import "./style";
</style>