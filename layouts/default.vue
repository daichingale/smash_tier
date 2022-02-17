<template>
<div class="main_container">
         <NavBar />
         <!-- <Search /> -->
        <!-- <el-row class="tac">
          <el-col :span="18"> -->
        <div class="centering">
        <Nuxt/>
        </div>  
          <!-- </el-col>
        </el-row> -->
        <!-- <Paypal /> -->
        <adsbygoogle />
      <Footer />
    
    </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue';
import Search from '~/components/Search.vue';
import Footer from '~/components/Footer.vue';
// import Paypal from '~/components/Paypal.vue';
export default {
  components:{
    NavBar,
    Footer,
    Search,
    // Paypal,
  }
}
</script>

<style>
.main_container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.centering{
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
</style>