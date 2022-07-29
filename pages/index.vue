<template>
  <div>
    <HeroSection/>
    <Header title="DevBoard"/>
    <DevBoard :user="$config.social.codestats"/>
    <Header title="Projects"/>

    <!-- projects -->

      <div data-aos="zoom-in" class="mt-5 gap-4 grid lg:grid-cols-2 max-w-5xl mx-auto">
          <div v-for="(project, index) in projectsByTechs" :key="project.slug">
              <ProjectCard v-if="index < 4" data-aos="zoom-in" class="" :project="project" />
          </div>
      </div>

  </div>
</template>

<script>
import FullStack from '~/components/home/FullStack.vue'
import Frameworks from '../components/home/Frameworks.vue';
import DevBoard from '~/components/stats/DevBoard.vue';
import Header from '~/components/Header.vue';
import Projects from '../components/home/Projects.vue';

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
    components: { FullStack, Frameworks, DevBoard, Header, Header, Projects }
}
</script>

<style>
</style>
