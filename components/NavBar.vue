<template>
  <div class="navibar_kun">
    <el-menu class="navbar_element_ui" hide-timeout="2" mode="horizontal" @select="handleSelect" id="navbars_elui">
      <el-menu-item index="1" id="elmenu_kun"><nuxt-link to="/">Home</nuxt-link></el-menu-item>
      <el-menu-item index="2" id="elmenu_kun"><nuxt-link to="/about">About</nuxt-link></el-menu-item>
      <el-menu-item index="3" id="elmenu_kun"><nuxt-link to="/posts">Posts</nuxt-link></el-menu-item>
    </el-menu>

  </div>
</template>
<script>
  export default {
    data (){
      return {
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
  }
</script>
<style>
.navibar_kun {

  display: flex;
  justify-content: center;
  align-items: center;
}
#navbars_elui a{
  display: block;
}
#elmenu_kun {
  vertical-align: middle;
}
</style>