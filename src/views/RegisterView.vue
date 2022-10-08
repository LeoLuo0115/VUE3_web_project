<template>
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
                     label="Option 1"
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
          value: 'Card',
          label: 'Card',
        },
        {
          value: 'Option3',
          label: 'Option3',
        },
      ]
    }
  },
  methods: {
    login () {
      console.log(this.registerForm.userName)
      console.log(this.registerForm.password)

      this.$axios.post('/login', {
        userName: this.registerForm.userName,
        password: this.registerForm.password
      })
        .then(resp => {
          if (resp.data.code === 0) {
            console.log(resp.data.user)
            this.$router.replace('/index')
          } else {
            console.log(resp.data.msg)
          }
        })
    },

    fill () {
      console.log(this.checked)

      if (this.checked) {
        this.registerForm.billing_address = this.registerForm.mailing_address
      }
      else {
        this.registerForm.billing_address = ''
      }

      console.log(this.registerForm.billing_address)
      console.log(this.registerForm.mailing_address)
    }
  }

}
</script>

<style scoped>
.box-card {
  margin: 100px auto;
  width: 400px;
}
</style>