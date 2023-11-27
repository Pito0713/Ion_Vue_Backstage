<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { reactive } from 'vue'
const router = useRouter()
const loading = ref(false)

const formInline = reactive({
  user: '',
  sex: "1",
  date: new Date(),
})

const onSubmit = (e) => {
  loading.value = true
  console.log(formInline)
  router.push('/homePage');

}
</script>

<template>
  <template v-loading="loading" class="content">
    <el-form :inline="false" :model="formInline" class="form" label-position="top">
      <el-form-item label="你的暱稱">
        <el-input v-model="formInline.user" placeholder="輸入你的暱稱" clearable class="input" />
      </el-form-item>
      <el-form-item label="你的性別">
        <el-select v-model="formInline.sex" placeholder="選擇你的性別" clearable class="select">
          <el-option label="男" value="1" />
          <el-option label="女" value="2" />
        </el-select>
      </el-form-item>
      <el-form-item label="你的生日">
        <el-date-picker v-model="formInline.date" type="date" placeholder="選擇你的生日" class="picker" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">開始測試</el-button>
      </el-form-item>
    </el-form>
  </template>
</template>

<style lang="scss" scoped>
@import "./style";
</style>