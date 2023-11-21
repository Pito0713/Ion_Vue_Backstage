<script setup>
import { useRouter } from 'vue-router'
import headerbar from '@COM/header-bar/headerBarPage.vue';
const router = useRouter()
</script>

<template>
  <div>
    <router-view />
    <headerbar class="head" />
  </div>
</template>

<style lang="scss" scoped>
@import "./style";
</style>