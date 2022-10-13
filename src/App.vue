<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <NavBar>

        </NavBar>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>


<script  setup>
//import { ref } from 'vue'
import NavBar from "./components/NavBar.vue";
</script>



<style>
html,
body {
  height: 100%;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  overflow: hidden;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.common-layout,
.el-container {
  height: 100%;
}

.el-header {
  background: #545c64;
}

.background {
  height: calc(100% + 40px);
  overflow: hidden;
  /* background-color: blue; */
  margin: -20px;
  background-size: 100% 100% !important;
}

.el-main {
  padding: 0 !important;
}
</style>
