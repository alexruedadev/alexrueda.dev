<template>
  <div>
    <HeroSection/>
    <Divider/>
    <NewStack/>
    <!-- <Hardskills/>
    <Currently/>
    <LazyRecentBlog v-if="$config.blog.enabled && posts" :posts="posts"/> 
    -->
  </div>
</template>

<script>
import FullStack from '~/components/home/FullStack.vue'
import Tab from '~/components/home/Tab.vue';
import Divider from '~/components/home/Divider.vue';

export default {
    head() {
        return {
            title: `${this.$config.name} | Developer`,
        };
    },
    data() {
        return {
            posts: null
        };
    },
    async created() {
        const fetchDocsLabel = "fetchAllPosts";
        console.time(fetchDocsLabel);
        try {
            const posts = await this.$content("posts")
                .without(["body", "toc", "dir", "extension", "path", "tags"])
                .limit(3)
                .skip(0)
                .sortBy("createdAt", "desc")
                .fetch();
            this.posts = posts;
        }
        catch (e) {
            console.error(e);
        }
        finally {
            console.timeEnd(fetchDocsLabel);
        }
    },
    components: { FullStack, Tab, Divider }
}
</script>

<style>
</style>
