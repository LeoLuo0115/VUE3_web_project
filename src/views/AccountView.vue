<template>
  <el-descriptions class="Account_Info"
                   title="Account Info"
                   :column="3"
                   :size="size"
                   border>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-user"></i>
        Username
      </template>

      {{accountInfo.username}}

    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-mobile-phone"></i>
        phonenumber
      </template>
      18100000000
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        mailing_address
      </template>
      苏州市
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-location-outline"></i>
        billing_address
      </template>
      苏州市
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <i class="el-icon-tickets"></i>
        star_points
      </template>
      <el-tag size="large">0</el-tag>
    </el-descriptions-item>

    <el-descriptions-item>
      <template #label>
        <i class="el-icon-office-building"></i>
        preferred_payment_method
      </template>
      1
    </el-descriptions-item>

    <el-descriptions-item>
      <template #label>
        <i class="el-icon-office-building"></i>
        preferred_dish
      </template>
      1
    </el-descriptions-item>

  </el-descriptions>

</template>

<script>
export default {
  name: 'Account-Page',

  data () {
    return {
      accountInfo: {
        username: '',
        phonenumber: '',
      }
    }
  },


  created () {
    if (sessionStorage.getItem('Account_Info')) {
      this.accountInfo = JSON.parse(sessionStorage.getItem('Account_Info'))
    }
  }
}
</script>

<style scoped>
.Account_Info {
  padding: 100px;
}
</style>
