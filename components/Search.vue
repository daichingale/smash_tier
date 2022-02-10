<template>
    <div>
        <el-input placeholder="記事検索" v-model="q" id="search"></el-input>
    </div>
</template>


<script>
export default {
 async asyncData ({ $content,route }) {
   const q = route.query.q
   let query = $content('', { deep: true })
   .sortBy('date', 'desc')
   if (q) {
      query = query.search(q)
   }
   const articles = await query.fetch()
   return {
      q,
      articles
   }
  },
  watch: {
    q () {
      this.$router.replace({ query: this.q ? { q: this.q } : undefined }).catch(() => { })
    }
  },
  watchQuery: true
}

</script>