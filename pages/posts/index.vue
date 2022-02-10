<template>
  <div>
    <h1>記事一覧</h1>
    <ul id="posts_uls">
    <li v-for="content in contents" :key="content.id" id="list_kun">
      <div id="float_kun">
      <img :src="content.image.url" width="50" height="50" id="image_kun">
      <nuxt-link :to="`/${content.id}`" id="post_lists">{{ content.title }}</nuxt-link>
      </div>
    </li>
  </ul>
</div>
</template>

// <script>
// import axios from 'axios'
export default {
  head () {
    return {
      title : 'Posts',
    }
  },
//   async asyncData( $config ) {
//     const { data } = await axios.get(
//       "https://smashbrosinfo.microcms.io/api/v1/blog",
//       {
//           headers:{"X-MICROCMS-API-KEY":$config.apiKey}
//       }
//     )
//     return data;
//   }
// }
async asyncData({ $microcms }) {
    const data = await $microcms.get({
      endpoint: "blog",
    });
    return data;
  },
}
</script>

<style>
  h1 {

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
  }
  #image_kun {
    display: block;
  }
</style>