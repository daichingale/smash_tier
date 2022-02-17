<template>
  <div>
<el-card class="box-card">
    <template #header>
      <div class="card-header">
        <h4>Blog</h4>
        <el-button class="button" round><i class="fa-solid fa-blog"></i>
          <a href="/posts"
                  class="card-link" target="_blank" rel="noopener noreferrer">Blog</a></el-button>
      </div>
    </template>
    <p class="card-text">
                  スマブラメモ・ゲームネタについて<br>
                  作曲・編曲・VOCALOID・良いと思った曲などについて<br>
                  プログラミングの自学自習のネタについて<br>
                  雑多に書いていきます。
     </p>
  </el-card>
<el-card class="box-card">
    <template #header>
      <div class="card-header">
        <h4>Youtube</h4>
        <el-button class="button" round><i class="fa-brands fa-youtube"></i>
          <a href="https://www.youtube.com/channel/UCQUdECKCDayjNdfC5bNKqow"
                  class="card-link" target="_blank" rel="noopener noreferrer">Youtube</a></el-button>
      </div>
    </template>
    <p class="card-text">
                  ばーさんちゃんねるのYoutube
     </p>
  </el-card>
<el-card class="box-card">
    <template #header>
      <div class="card-header">
        <h4>Twitter</h4>
        <el-button class="button" round><i class="fab fa-twitter"></i>
          <a href="https://twitter.com/ver3_ocharake"
                  class="card-link" target="_blank" rel="noopener noreferrer">Twitter</a></el-button>
      </div>
    </template>
    <p class="card-text">
                  アホなことばっかり呟いています。
     </p>
  </el-card>
<el-card class="box-card">
    <template #header>
      <div class="card-header">
        <h4>How to join Japanese Ness Team</h4>
        <el-button class="button" round><i class="fa-solid fa-baseball"></i>
          <a href="#"
                  class="card-link" target="_blank" rel="noopener noreferrer">Ness team</a></el-button>
      </div>
    </template>
    <p class="card-text">
                  ネス使いの楽園「ネス窓」についてはこちらですよ
     </p>
  </el-card>
  </div>
</template>

<script>
export default {
  computed: {
  },
  components: { 
   },
  head () {
    return {
      titleTemplate: null,
      title : 'Top | 趣味に全力を尽くす男のブログ',
      link: [{
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        }],
    }
  },
  name: 'IndexPage',
  data () {
    return {
      value: null
    }
  }
}
</script>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 100%;
}

</style>