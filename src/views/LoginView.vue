<template>
  <div class="background">
    <el-card class="box-card">
      <el-form>
        <h3>Login To My Account</h3>
        <el-form-item>
          <el-input v-model="loginForm.username"
                    placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password"
                    v-model="loginForm.password"
                    placeholder="Password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="login">Login</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      console.log(this.loginForm.username)
      console.log(this.loginForm.password)

      // 通过 Axios 来发送异步 http 请求 (增删改查)

      axios.post('/api/login', {
        username: this.loginForm.username,
        password: this.loginForm.password
      })
        // 如果成功就会调用 .then 方法 失败会调用 .catch 方法
        // .then(function(resp){
        //   console.log(resp)
        // })
        .then(resp => {
          console.log(resp)
          if (resp.data.code === 0) {
            console.log(resp.data.user) // 参数是哪里来的
            this.$router.replace('/index')
            // replace 
            // push
          } else {
            console.log(resp.data.msg) // 失败输出 msg
          }
        })
      console.log(11)
    }

  }
}
</script>


<script setup>


</script>

<style scoped>
.box-card {
  margin: 100px auto;
  width: 400px;
}

.background {
  background: url('../assets/pizza.jpg');
}
</style>