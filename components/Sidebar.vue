<template>
    <div>
  <el-col :span="6">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      >
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span>Navi</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-message"></i>
        <span>MAIL</span>
      </el-menu-item>
    </el-menu>
  </el-col>
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    }
}
</script>

<style>
#side_menu_kun {
  overflow: hidden;
}
</style>