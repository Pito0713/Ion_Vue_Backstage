<script setup>
import { MENU_LIST } from '@CONFIGS/site'
</script>

<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">

    <template v-for="(item, index) in MENU_LIST">
      <el-menu-item :index="item.index">
        <router-link class="nav_items" :to=item.route>{{ item.name }}</router-link>
      </el-menu-item>
    </template>


  </el-menu>
</template>


<style lang="scss" scoped>
@import "./style";
</style>