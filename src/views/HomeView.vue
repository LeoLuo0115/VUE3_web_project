<template>
  <div class="home-wrapper">
    <img class="logo"
         src="../assets/pizza-overlay.jpg"
         alt="logo">

    <img class="food"
         v-for="item in pic"
         :key="item"
         :src="require('../assets/image/'+item.replace('./',''))"
         alt="tupian">
  </div>
</template>


<script setup>

const pic = require.context('../assets/image', false, /\.jpg|\.webp$/).keys()

console.log(pic)
</script>

<style scoped>
.food {
  width: 500px;
}

.logo {
  display: block;
  margin: 0 auto;
  width: 100%;
  height: 100%; /**宽高100%是为了图片铺满屏幕 */
}
</style>

