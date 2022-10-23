<template>
  <div class="nav-wrap">
    <el-menu :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b"
             @select="handleSelect">
      <el-menu-item index="/">Menu</el-menu-item>
      <el-menu-item index="/reserve">Reservation</el-menu-item>
      <el-menu-item index="/account">Account</el-menu-item>
    </el-menu>
    <div class="operate-wrap">
      <el-button type="primary"
                 round
                 @click="jump('/login')">Login</el-button>
      <el-button type="success"
                 round
                 @click="jump('/register')">Register</el-button>
    </div>
  </div>
</template>



<script  setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const activeIndex = ref('/')
const handleSelect = (key) => {
  if (activeIndex.value === key) return
  jump(key)
}

const router = useRouter()
const route = useRoute()

watch(() => route, () => {
  activeIndex.value = route.path
}, { deep: true })
//jump
const jump = (path) => {
  router.push(path)
  activeIndex.value = path
}
</script>


<style lang="scss" scoped>
.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .el-menu-demo {
    flex: 1;
  }
  .operate-wrap {
  }
}
</style>

