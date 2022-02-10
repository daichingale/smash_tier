<template>
<div>
 <main class="main">
    <h1 class="title">{{ title }}</h1>
    <p class="publishedAt">{{ publishedAt }}</p>
    <div class="category">
      <p>カテゴリ:{{ category.category }}</p>
      </div>
    <img :src="image.url" width=50% id="gazou">
    <hr>
    <div class="post" v-html="blogtext"></div>
  </main>
</div>
  
</template>

<script>
export default {
  components: {
  },
  head () {
    return {
      title : 'Blog',
    }
  },
  async asyncData({ params, $microcms }) {
    const data = await $microcms.get({
      endpoint: "blog",
      contentId: params.slug,
    });
    return data
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
  #gazou {
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  margin: 0 0 10px 0;
  }
  .category{
    margin:2em 0;
    position: relative;
    padding: 0.5em 1.5em;
    border-top: solid 2px black;
    border-bottom: solid 2px black;
    width:fit-content
}
.category:before, .category:after{
    content: '';
    position: absolute;
    top: -10px;
    width: 2px;
    height: -webkit-calc(100% + 20px);
    height: calc(100% + 20px);
    background-color: black;
}
.category:before {left: 10px;}
.category:after {right: 10px;}
.category p {
    margin: 0; 
    padding: 0;
}
.post {

}
</style>