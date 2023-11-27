<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const dialogVisible = ref(false)

const handleClose = (done) => {
  router.push('/activePage');
}

const activeNames = ref(['1'])
const handleChange = (val) => {
  console.log(val)
}
</script>

<template>
  <div>
    <el-carousel height="150px" interval="3000">
      <el-carousel-item v-for="item in 3" :key="item">
        <a>{{ item }}</a>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="demo-collapse">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="測試大綱" name="1">
        <div>
          這個測驗將通過八個問題，來評估你的自我慈悲和專注力的水平，並給你一些建議，讓你活得更好。請根據你的真實感受，選擇最符合你的答案，每一題的答案從0到4，分別代表非常不同意到非常同意。
        </div>
      </el-collapse-item>
      <el-collapse-item title="測試內容" name="2">
        <div>
          IESGO心理：「如果我們的童年有許多快樂回憶，那內在小孩會伴隨著你健康成長；如果童年有很多負面回憶，那這個孩子也許會讓你變得悲觀與焦慮。」
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>

  <el-button @click="dialogVisible = true">開始測試</el-button>

  <el-dialog v-model="dialogVisible" width="50%" :show-close=false>
    <span>開始測試</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="handleClose">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
@import "./style";
</style>