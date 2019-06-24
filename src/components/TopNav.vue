<template>
  <div class="topNav">
      <div class="topNavLeft">
          <el-button type="text"><i class="el-icon-eleme"></i> Hi 管理员</el-button>

      </div>
      <div class="topNavRight">
        <el-button type="text" class="logOut"><i class="el-icon-user"></i>个人中心</el-button>
        <el-button type="text" class="logOut">退出</el-button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  props: {
    msg: String
  },
  data() {
      return {
        
      }
  },
  methods:{
      // handleSelect(key, keyPath) {
      //   console.log(key, keyPath);
      // },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topNav{
    width: 100%;
    height: 80px;
    background: #545c64;
}
.topNav .topNavLeft{
    padding: 20px;
    float: left;
}
.topNav .topNavRight{
    padding: 20px;
    float: right;
}

</style>
