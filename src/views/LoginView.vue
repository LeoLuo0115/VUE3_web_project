<template>
  <div class="background">
    <el-card class="box-card">
      <el-form :model="loginForm"
               :rules="rules"
               ref="formRef">
        <h3>Login To My Account</h3>
        <el-form-item required
                      prop="username">
          <el-input v-model="loginForm.username"
                    placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item required
                      prop="password">
          <el-input type="password"
                    v-model="loginForm.password"
                    placeholder="Password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     :loading="loading"
                     @click="login('formRef')">Login</el-button>
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
      },

      loading: false,

      rules: {
        username: [
          { required: true, message: 'Please Enter Username', trigger: 'blur' },
          // { min: 6, max: 14, message: '长度在 6 到 14 个字符', trigger: 'change' }
          { min: 6, max: 14, message: 'length between 6 to 14', trigger: 'change' }
        ],
        password: [
          { required: true, message: 'Please Enter Username', trigger: 'blur' },
          // { min: 6, max: 14, message: '长度在 6 到 14 个字符', trigger: 'change' }
          { min: 6, max: 14, message: 'length between 6 to 14', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    login (formName) {

      // this.$refs[formName].validate((valid) => {
      //     if (valid) {
      //       alert('submit!');
      //     } else {
      //       console.log('error submit!!');
      //       return false;
      //     }
      //   });

      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true

          console.log(this.loginForm.username)
          console.log(this.loginForm.password)

          // 通过 Axios 来发送异步 http 请求 (增删改查)

          axios.post('/api/login', {
            username: this.loginForm.username,
            password: this.loginForm.password
          })

            // 如果成功就会调用 .then 方法 失败会调用 .catch 方法

            .then(resp => {
              console.log(resp)
              if (resp.data.code === '200') {
                this.$message.success('Login Successfully!')

                sessionStorage.setItem('username', this.loginForm.username)

                sessionStorage.setItem('Account_Info', JSON.stringify(resp.data.data))


                this.$router.replace('/reserve')

              } else {
                // console.log(resp.data.msg) // 失败输出 msg
                this.$message.error(resp.data.msg)
              }
            })
            .finally(() => {
              this.loading = false
            })

        } else {
          console.log('error submit!!');
          return false;
        }
      });


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