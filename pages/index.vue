<template>
  <div>
    <HeroSection/>
    <Carousel />

    <div data-aos="zoom-in" id="liner" class="max-w-5xl mx-auto p-3 font-playmegames flex border-b-2 border-gray-400">
        <h2 class="text-3xl mx-auto md:mx-10 tracking-wide flex">
            <p class="text-gray-200">Dev</p>
            <span class="text-blue-light">Projects</span>
        </h2>
      </div>
    <div data-aos="zoom-in" class="mt-5 gap-4 grid lg:grid-cols-2 max-w-5xl mx-auto px-10 md:px-0">
      <div v-for="(project, index) in projectsByTechs" :key="project.slug">
        <ProjectCard v-if="index < 4" data-aos="zoom-in" class="" :project="project" />
      </div>
    </div>
    <div class="mx-auto max-w-5xl flex justify-center my-10">
      
      <button class="relative px-6 py-2 group mr-5 items-center justify-center ">
        <span class="absolute inset-0 w-full h-full transition transform translate-x-1.5 translate-y-1.5 bg-gray-700 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span id="btn-pixel" class="absolute inset-0 w-full h-full border-2 bg-gray-900 border-gray-600  group-hover:bg-blue-medium"></span>
        <div class="flex">
          <span class="relative text-gray-300 group-hover:text-white self-center font-playmegames tracking-wider">All projects</span>
          <img src="images/pixelart/arrow-right.png" class="w-4 h-4 z-0 ml-2 self-center" alt="">
        </div>
      </button>
      
    </div>

    <!-- <Header title="DevBoard"/> -->
    <DevBoard :user="$config.social.codestats"/>

    

  </div>
</template>

<script>

import DevBoard from '~/components/stats/DevBoard.vue';
import Header from '~/components/Header.vue';
import Carousel from '~/components/home/Carousel.vue';

const ALL = 'all'

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
    computed: {
    techs() {
      let techs = []
      this.projects.forEach((project) => {

        project.tech.split(' ').forEach((tech) => {
          if (tech.trim() !== "") {
            /* let path = 'images/pixelart/' + tech + '.png'; */
            techs.push(tech.trim())
          }
        })
      })
      return [ALL, ...new Set(techs)]
    },
    projectsByTechs() {
      if (this.currentTech === ALL)
        return this.projects
      return this.projects.filter(project => project.tech.includes(this.currentTech))
    }
  },
  data() {
    return {
      currentTech: ALL,
      ALL: ALL, // exporting it to template
    }
  },
  async asyncData({ $content }) {
    const fetchDocsLabel = 'fetchAllProjects'
    console.log('Se ha ejecutado asyncData')
    const projects = await $content('projects')
      .without(['body', 'toc'])
      .sortBy('id', 'asc')
      .fetch()
    console.timeEnd(fetchDocsLabel)
    console.log(projects)
    return {
      projects
    }
  },

/*     async created() {
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
    }, */
    components: {DevBoard, Header, Carousel }
}
</script>

<style>