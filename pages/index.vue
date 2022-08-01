<template>
  <div>
    <Hero />
    <!-- <Carousel /> -->
    <Projects :projectsByTechs="projectsByTechs" />
    <DevBoard :user="$config.social.codestats"/>
  </div>
</template>

<script>
import Hero from '~/components/home/Hero.vue'
import DevBoard from '~/components/stats/DevBoard.vue';
import Carousel from '~/components/home/Carousel.vue';
import Projects from '~/components/home/Projects.vue';

const ALL = 'all'

export default {
    head() {
        return {
            title: `${this.$config.name} | Developer`,
        };
    },
    data() {
      return {
        currentTech: ALL,
        ALL: ALL,
      }
    },
    computed: {
      projectsByTechs() {
        console.log(this.projects[0])
        if (this.currentTech === ALL) return this.projects
        return this.projects.filter(project => project.tech.includes(this.currentTech))
      }
    },
    async asyncData({ $content }) {
      const projects = await $content('projects')
        .without(['body', 'toc'])
        .sortBy('id', 'asc')
        .fetch()
      return {
        projects
      }
    },
    components: { DevBoard, Hero, Carousel, Projects }
}
</script>

<style>

</style>