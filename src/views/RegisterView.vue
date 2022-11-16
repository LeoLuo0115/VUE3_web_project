<template>
  <div class="background">
    <el-card class="box-card">
      <el-form :model="registerForm"
               :rules="rules"
               ref="formRef">
        <h3>Register For An Online Account</h3>
        <el-form-item required
                      prop="username">
          <el-input v-model="registerForm.username"
                    placeholder="Username"></el-input>
        </el-form-item>

        <el-form-item required
                      prop="password">
          <el-input type="password"
                    v-model="registerForm.password"
                    placeholder="Password"></el-input>
        </el-form-item>

        <el-form-item required
                      prop="mailing_address">
          <el-input v-model="registerForm.mailing_address"
                    placeholder="Mailing Address"></el-input>
        </el-form-item>

        <el-form-item>
          <el-checkbox v-model="checked"
                       @change="fill"
                       label="Check if Billing Address is same as Mailing Address"
                       size="large" />
        </el-form-item>

        <el-form-item v-if="!checked"
                      required
                      prop="billing_address">
          <el-input v-model="registerForm.billing_address"
                    placeholder="Billing Address"></el-input>
        </el-form-item>

        <el-form-item required
                      prop="value">
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
                     :loading="loading"
                     @click="Register('formRef')">COMPLETE MY ACCOUNT</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register-Page',
  data () {
    return {
      registerForm: {
        username: '',
        password: '',
        mailing_address: '',
        billing_address: '',
        value: '',
      },

      checked: false,

      loading: false,

      options: [
        {
          value: 1,
          label: 'Cash',
        },
        {
          value: 2,
          label: 'Credit',
        },
        {
          value: 3,
          label: 'Check',
        },
      ],

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

    Register (formName) {

      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true

          axios.post('/api/registered', {
            username: this.registerForm.username,
            password: this.registerForm.password,
            mailing_address: this.registerForm.mailing_address,
            billing_address: this.registerForm.billing_address,
            value: this.registerForm.value
          })
            // 如果成功就会调用 .then 方法 失败会调用 .catch 方法
            // .then(function(resp){
            //   console.log(resp)
            // })
            .then(resp => {
              console.log(resp)
              if (resp.data.code === '200') {
                this.$message.success('Register Successfully!')
                this.$router.replace('/login')
                // replace 
                // push
              } else {
                this.$message.error('Register Failed!')
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


      console.log(this.registerForm.username)
      console.log(this.registerForm.password)

      // 通过 Axios 来发送异步 http 请求 (增删改查)

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