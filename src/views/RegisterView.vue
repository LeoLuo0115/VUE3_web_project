<template>
  <div class="background">
    <el-card class="box-card">
      <el-form>
        <h3>Register For An Online Ordering Account</h3>
        <el-form-item>
          <el-input v-model="registerForm.userName"
                    placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password"
                    v-model="registerForm.password"
                    placeholder="Password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-input v-model="registerForm.mailing_address"
                    placeholder="Mailing Address"></el-input>
        </el-form-item>

        <el-form-item>
          <el-checkbox v-model="checked"
                       @change="fill"
                       label="Check if Billing Address is same as Mailing Address"
                       size="large" />
        </el-form-item>

        <el-form-item v-if="!checked">
          <el-input v-model="registerForm.billing_address"
                    placeholder="Billing Address"></el-input>
        </el-form-item>

        <el-form-item>
          <el-select v-model="registerForm.value"
                     clearable
                     placeholder="preferred payment method">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value" />
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary"
                     @click="login">COMPLETE MY ACCOUNT</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Register-Page',
  data () {
    return {
      registerForm: {
        userName: '',
        password: '',
        mailing_address: '',
        billing_address: '',
        value: '',
      },

      checked: false,

      options: [
        {
          value: 'Cash',
          label: 'Cash',
        },
        {
          value: 'Credit',
          label: 'Credit',
        },
        {
          value: 'Check',
          label: 'Check',
        },
      ]
    }
  },
  methods: {
    login () {
      console.log(this.registerForm.userName)
      console.log(this.registerForm.password)

      // 通过 Axios 来发送异步 http 请求 (增删改查)
      this.$axios.post('/login', {
        userName: this.registerForm.userName,
        password: this.registerForm.password
      })
        // 如果成功就会调用 .then 方法 失败会调用 .catch 方法
        // .then(function(resp){
        //   console.log(resp)
        // })
        .then(resp => {
          if (resp.data.code === 0) {
            console.log(resp.data.user) // 参数是哪里来的
            this.$router.replace('/index') // 不理解
            // replace 
            // push
          } else {
            console.log(resp.data.msg) // 失败输出 msg？
          }
        })
      console.log(11)
    },


    fill () {
      console.log(this.checked)

      if (this.checked) {
        this.registerForm.billing_address = this.registerForm.mailing_address
      }
      else {
        this.registerForm.billing_address = ''
      }

      console.log(this.registerForm.mailing_address)
      console.log(this.registerForm.billing_address)

    }
  }

}
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