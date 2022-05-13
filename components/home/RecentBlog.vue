<template>
  <div id="liner" v-if="$config.blog.enabled" class="border-t border-b border-dashed">
    <div id="liner" data-aos="fade-up" class="max-w-7xl pb-6 mx-auto border-l border-r border-dashed">
      <div class="max-w-prose text-center mx-auto py-8">
        <p id="section-subtitle" class="text-xs leading-6 font-semibold tracking-wide lowercase">
          {{ $t('recentBlog.subtext') }}
        </p>
        <nuxt-link id="section-title" :to="localePath('/blog')" class="mt-2 text-3xl leading-8 font-extrabold tracking-tight">
        {{ $t('recentBlog.header') }}
        </nuxt-link>
        <p id="section-desc">
          
        </p>
      </div>
      <div data-aos="zoom-in" class="gap-4 mx-4 grid max-w-7xl grid-flow-row lg:grid-flow-col">
        <BlogCard v-for="post in posts" :key="post.slug" :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
