<template>
  <div>
    <HeroSection/>
    <Hardskills/>
    <Currently/>
    <LazyRecentBlog v-if="$config.blog.enabled && posts" :posts="posts"/>
  </div>
</template>

<script>

export default {

  head() {
    return {
      title: `${this.$config.name} | Developer`,
    }
  },
  data() {
    return {
      posts: null
    }
  },
  async created() {
    const fetchDocsLabel = 'fetchAllPosts'
    console.time(fetchDocsLabel)
    try {
      const posts = await this.$content('posts')
        .without(['body', 'toc', 'dir', 'extension', 'path', 'tags'])
        .limit(3)
        .skip(0)
        .sortBy('createdAt', 'desc')
        .fetch()
      this.posts = posts
    } catch (e) {
      console.error(e)
    } finally {
      console.timeEnd(fetchDocsLabel)
    }
  },
}
</script>

<style>
</style>
