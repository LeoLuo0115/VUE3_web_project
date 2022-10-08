<template>
  <div class="background">
    <el-card class="box-card">
      <el-form>
        <h3>Login To My Account</h3>
        <el-form-item>
          <el-input v-model="loginForm.userName"
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
export default {
  data () {
    return {
      loginForm: {
        userName: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      console.log(this.loginForm.userName)
      console.log(this.loginForm.password)


      // 往后端传请求
      this.$axios.post('/login', {
        userName: this.loginForm.userName,
        password: this.loginForm.password
      })
        .then(resp => {
          if (resp.data.code === 0) {
            console.log(resp.data.user)
            this.$router.replace('/index')
          } else {
            console.log(resp.data.msg)
          }
        })
    }

  }
}
</script>


<script setup>


</script>

<style scoped>
.background {
  height: calc(100% + 40px);
  overflow: hidden;
  background-color: blue;
  margin: -20px;
}

.box-card {
  margin: 100px auto;
  width: 400px;
}
</style>