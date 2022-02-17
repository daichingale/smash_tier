<template>
<div>
    <h1>このブログについて</h1>
    <h3>{{ nushi }}</h3>
    <p>{{ param1 }}</p>
    <h3>{{ naiyou }}</h3>
    <p>{{ param2 }}</p>
    <h3>{{ player }}</h3>
    <p>{{ param3 }}</p>
</div>
  
</template>

<script>
export default {
  head () {
    return {
      title : 'About',
    }
  },
  data(){
    return {
      nushi: 'Ver.3/ばーさんちゃんねる',
      param1: 'ネス窓副窓主、お勉強窓主などやってます。気まぐれに曲書いたりします。配信もやってます。スマブラは一応全キャラVIPにしました。',
      naiyou: '内容',
      param2: 'スマブラを中心としたゲームのことや音楽系のことをメモ書きとして書いていきます。このブログを作るために読んだ記事に関しての内容や、日常で気になったことがあれば書くかも',
      player: '主なスマブラ使用キャラ',
      param3: 'シーク、ガオガエン、ネス、サムス・ダークサムス、メタナイト、ゼルダ、マルス、ゲッコウガ、ロックマン',
      
    }
  },
}
</script>
<style>
  h1 {
    font-size: 30px;
    font-weight: bold;
    margin: 40 0 20;
    background-color: #eee;
    padding: 10 20;
    border-radius: 5px;
  }
  h3 {
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0;
    color: #364e96;/*文字色*/
    padding: 0.5em 0;/*上下の余白*/
    border-top: solid 3px #364e96;/*上線*/
    border-bottom: solid 3px #364e96;/*下線*/
  }
</style>