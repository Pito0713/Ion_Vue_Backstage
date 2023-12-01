<script setup>
import { ref, reactive } from 'vue'
import { useRouter, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import { dataLIST } from '../../configs/data'
const router = useRouter()
const page = ref(0)

const handlePage = (done) => {
  if (dataLIST.length >= page.value) page.value = page.value + 1
}
const List = reactive({
  data: [],
});
const handleAnswer = (uesrValue) => {
  List.data.push(uesrValue)
  handlePage()
}
const handleClose = (done) => {
  router.push('/recordPage');
}


onBeforeRouteLeave((to, from, next) => {
  const answer = window.confirm('确定要离开吗？');
  if (!answer) {
    next(false)
  }
  router.go(0)
})

</script>

<template>
  <template v-if="dataLIST.length > page">
    <a>{{ dataLIST[page].question }}</a>
    <template v-for="(option, index) in dataLIST[page].options" :key="index">
      <el-button @click="handleAnswer(option[index].value)">
        {{ option[index].text }}
      </el-button>
    </template>
  </template>
  <template v-else>
    <el-button type="primary" @click="handlePage">
      Confirm
    </el-button>
  </template>
</template>

<style lang="scss" scoped>
@import "./style";
</style>