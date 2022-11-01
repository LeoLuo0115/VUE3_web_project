<template>
  <div class="background">
    <el-card class="box-card">
      <el-form :model="form"
               :rules="rules"
               ref="formRef">
        <h3>Make Your Reservation Today</h3>
        <el-form-item required
                      prop="headcount">
          <el-input-number v-model="form.headcount"
                           style="width:100%"
                           :min="1"
                           :max="14" />
        </el-form-item>

        <el-form-item required
                      prop="datetime">
          <el-date-picker v-model="form.datetime"
                          type="date"
                          style="width:100%"
                          placeholder="Pick a day" />
        </el-form-item>

        <el-form-item required
                      prop="startTime">
          <el-time-select v-model="form.startTime"
                          style="width:100%"
                          :max-time="form.endTime"
                          class="mr-4"
                          placeholder="Start time"
                          start="09:00"
                          step="01:00"
                          end="21:00" />
        </el-form-item>

        <el-form-item required
                      prop="endTime">
          <el-time-select v-model="form.endTime"
                          style="width:100%"
                          :min-time="form.startTime"
                          placeholder="End time"
                          start="09:00"
                          step="01:00"
                          end="21:00" />
        </el-form-item>

        <el-form-item required
                      prop="name">
          <el-input v-model="form.name"
                    placeholder="name"></el-input>
        </el-form-item>

        <el-form-item required
                      prop="phonenumber">
          <el-input v-model="form.phonenumber"
                    placeholder="Phone Number"></el-input>
        </el-form-item>

        <el-form-item required
                      prop="email">
          <el-input v-model="form.email"
                    placeholder="Email Address"></el-input>
        </el-form-item>

        <el-form-item required
                      prop="value">
          <el-select v-model="form.value"
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
                     @click="reserve('formRef')">Reserve</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  data () {
    return {
      form: {
        headcount: 1,
        startTime: '',
        endTime: '',
        datetime: '',
        name: '',
        phonenumber: '',
        email: '',
        value: '',
      },

      username: sessionStorage.getItem('username'),

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
        phonenumber: [
          { required: true, message: 'Please Enter phonenumber', trigger: 'blur' },
          { min: 10, max: 10, message: 'Must Be length of 10 number', trigger: 'change' }
        ],
        email: [
          { required: true, message: 'Please Enter email', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 14 个字符', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    reserve () {
      this.$refs.formRef.validate(vaild => {
        if (vaild) {
          let msg = 'Confirm your Reservation'
          if (dayjs(this.form.datetime).day() === 0 || dayjs(this.form.datetime).day() === 6) {
            msg = 'Weekends are High Traffic days, No show will have minimum $10'
          }
          this.$confirm(msg, 'Warning', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning'
          })
            .then(() => {
              //在这里发请求
              this.$message({

              })
            })
        }
      })


      // console.log(this.loginForm.userName)
      // console.log(this.loginForm.password)


      // // 往后端传请求
      // this.$axios.post('/login', {
      //   userName: this.loginForm.userName,
      //   password: this.loginForm.password
      // })
      //   .then(resp => {
      //     if (resp.data.code === 0) {
      //       console.log(resp.data.user)
      //       this.$router.replace('/index')
      //     } else {
      //       console.log(resp.data.msg)
      //     }
      //   })

      console.log(dayjs(this.datetime).day())
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
  background: url('../assets/table.jpg');
}
</style>