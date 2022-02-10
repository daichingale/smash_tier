<template>
  <div>
    <div class="container">
        <div class="row">
          <div class="col-md-auto">
            <div class="card" style="width: 100%; height:300px;">
              <div class="card-body">
                <h4 class="card-title">Blog</h4>
                <h6 class="card-subtitle mb-2 text-muted">ブログ</h6>
                <p class="card-text">
                  スマブラメモ・ゲームネタについて<br>
                  作曲・編曲・VOCALOID・良いと思った曲などについて<br>
                  プログラミングの自学自習のネタについて<br>
                  雑多に書いていきます。
                </p>
                <a
                  href="/posts"
                  class="card-link">to Blog</a>
              </div>
            </div>
          </div>
          <div class="col-md-auto">
            <div class="card" style="width: 100%;  height:300px;">
              <div class="card-body">
                <h4 class="card-title">Youtube</h4>
                <h6 class="card-subtitle mb-2 text-muted">チャンネル登録お願いします。</h6>
                <p class="card-text">
                  ばーさんちゃんねるのYoutube
                </p>
                <a
                  href="https://www.youtube.com/channel/UCQUdECKCDayjNdfC5bNKqow"
                  class="card-link">to Youtube</a>
              </div>
            </div>
          </div>
          <div class="col-md-auto">
            <div class="card" style="width: 100%; height:300px;">
              <div class="card-body">
                <h4 class="card-title">Twitter</h4>
                <h6 class="card-subtitle mb-2 text-muted">ツイッター</h6>
                <p class="card-text">
                  アホなことばっかり呟いています。
                </p>
                <a
                  href="https://twitter.com/ver3_ocharake"
                  class="card-link">to Twitter</a>
              </div>
            </div>
          </div>
          <div class="col-md-auto">
            <div class="card" style="width: 100%; height:300px;">
              <div class="card-body">
                <h4 class="card-title">How to join Japanese Ness Team</h4>
                <h6 class="card-subtitle mb-2 text-muted">ネス窓</h6>
                <p class="card-text">
                  ネス使いの楽園「ネス窓」についてはこちらですよ
                </p>
                <a
                  href="/vip-ness"
                  class="card-link">to Ness team</a>
              </div>
            </div>
          </div>
          </div>
        <hr>
      </div>
  </div>
  

</template>

<script>
export default {
  components: {  },
  head () {
    return {
      title : 'Home',
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


</style>