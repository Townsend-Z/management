<template>
  <div class="mainContent">
    <!-- 左侧导航 -->
    <div class="leftNav">
      <el-row class="tac">
        <el-col :span="4">   
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-s-platform"></i>
                <span>服务大厅</span>
                </template>
                <el-menu-item-group>
                <el-menu-item index="1-1">在场服务</el-menu-item>
                <el-menu-item index="1-2">历史服务</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                <i class="el-icon-s-tools"></i>
                <span>系统设置</span>
                </template>
                <el-menu-item-group>
                <el-menu-item index="1-1">权限管理</el-menu-item>
                <el-menu-item index="1-2">角色管理</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span>人员数据</span>
                </template>
                <el-menu-item-group>        
                <el-menu-item index="1-1">人员数量</el-menu-item>
                <el-menu-item index="1-2">人员位置</el-menu-item>
                </el-menu-item-group>
            </el-submenu>      
            <el-submenu index="4">
                <template slot="title">
                <i class="el-icon-message-solid"></i>
                <span>健康报警</span>
                </template>
                <el-menu-item-group>       
                <el-menu-item index="1-1">心率报警</el-menu-item>
                <el-menu-item index="1-2">血压报警</el-menu-item>
                </el-menu-item-group>
            </el-submenu>     
            </el-menu>
        </el-col>
    </el-row>
    </div>
    <!-- 页面内容 -->
    <div class="content">

    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContent',
  props: {
    msg: String
  },
  components:{

  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainContent{
  width: 100%;
  height: 600px;
}
.el-submenu .el-menu-item{
    min-width: 100%;
}
.el-submenu__title{
    min-width: 100%;
}
.mainContent .leftNav{
  width: 10%;
  height: 600px;
  float: left;
  background: #545c64;
}
.mainContent .content{
  width:90%;
  height: 600px;
  float: right;
}

</style>
