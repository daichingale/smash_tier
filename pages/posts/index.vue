<template>
  <div>
    <h1>記事一覧</h1>
    <ul id="posts_uls">
    <li v-for="content in contents" :key="content.id" id="list_kun">
      <div id="float_kun">
      <img :src="content.image.url" width="50" height="50" id="image_kun">
      <nuxt-link :to="`/${content.id}`" id="post_lists">{{ content.title }}</nuxt-link>
      <p id="locales">{{ new Date(content.publishedAt).toLocaleDateString() }}</p>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  head () {
    return {
      title : 'Posts',
    }
  },
async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: "blog",
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
#posts_uls{

}
#float_kun{
  display: flex;
}
#list_kun {
  list-style: none;
  margin: 0 0 -1px;
  border: 1px  solid #000000;
  width: 100%;
}
#post_lists a{
  display: block;
  overflow-wrap: break-word;
}
#image_kun {
  display: block;
  overflow-wrap: break-word;
}
#locales {
  overflow-wrap: break-word;
}
</style>