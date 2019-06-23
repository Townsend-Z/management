<template>
  <div class="leftNav">
      <el-row class="tac">
        <el-col>
            <el-menu
            default-active="4"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#09f">
            <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">导航1</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-document"></i>
                <span slot="title">导航2</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">导航3</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-menu"></i>
                <span slot="title">导航4</span>
            </el-menu-item>
            <el-menu-item index="5">
                <i class="el-icon-menu"></i>
                <span slot="title">导航5</span>
            </el-menu-item>
            <el-menu-item index="6">
                <i class="el-icon-menu"></i>
                <span slot="title">导航6</span>
            </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'LeftNav',
  props: {
  },
  data() {
      return {
          
      }
  },
  methods:{
    //   handleOpen(key, keyPath) {
    //     console.log(key, keyPath);
    //   },
    //   handleClose(key, keyPath) {
    //     console.log(key, keyPath);
    //   }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.leftNav{
    height: 400px;
    float: left;
    margin: 0;
    padding: 0;
    background: #545c64;
}
.tac{
    
    height: 400px;
}
</style>
