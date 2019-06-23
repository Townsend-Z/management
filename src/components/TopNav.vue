<template>
  <div class="topNav">
      <div class="topNavLeft">
          <el-button type="text"><i class="el-icon-eleme"></i> Hi 管理员</el-button>

      </div>
      <div class="topNavRight">
        <el-button type="text" class="logOut"><i class="el-icon-user"></i>个人中心</el-button>
        <el-button type="text" class="logOut">退出</el-button>
      </div>
    <!-- <el-menu class="el-menu-demo" mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b" @select="handleSelect">
    
    <el-menu-item  index="1"><i class="el-icon-s-home"></i>你好管理员</el-menu-item>
    <el-submenu  index="2">
    <template class="personalInfo" slot="title"><i class="el-icon-user"></i>个人中心</template>
    <el-menu-item index="2_1">选项1</el-menu-item>
    <el-menu-item index="2_2">选项2</el-menu-item>
    <el-menu-item index="2_3">选项3</el-menu-item>
    </el-submenu>

    </el-menu> -->
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
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },

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
