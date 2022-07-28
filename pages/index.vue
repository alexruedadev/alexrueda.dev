<template>
  <div>
    <HeroSection/>
    <Header title="DevBoard"/>
    <DevBoard :user="$config.social.codestats"/>
    <Header title="Projects"/>

    <!-- projects -->
  <div id="liner" class="relative max-w-7xl border-r border-l border-dashed py-6 mx-auto sm:px-10 px-5">
    
    <div data-aos="zoom-in" class="select-none px-4 items-center justify-center sm:justify-start overflow-hidden flex pt-4 max-w-5xl mx-auto">
      <nav class="flex flex-wrap items-center justify-center flex-row space-x-2 sm:space-x-4" aria-label="Tabs">
        <button @click="currentTech = tech" :class="{ 'bg-gray-900 text-gray-300': tech === currentTech }" v-for="tech in techs" :key="tech"
                class="flex text-gray-300 focus:outline-none focus:ring-transparent focus:ring-offset-transparent hover:text-hot-pink px-3 py-2 font-medium text-sm rounded-xl">
          {{ tech }}
        </button>
      </nav>
    </div>

    <div data-aos="zoom-in" class="mt-5 gap-4 grid lg:grid-cols-2 max-w-5xl mx-auto">
        <div v-for="(project, index) in projectsByTechs" :key="project.slug">
            <ProjectCard v-if="index < 4" data-aos="zoom-in" class="hover:-rotate-12" :project="project" />
        </div>
    </div>
  </div>
    <!-- end proyects -->
<!-- 
    <Languages/>
    <Frameworks/> -->
    <!-- <Hardskills/>
    <Currently/>
    <LazyRecentBlog v-if="$config.blog.enabled && posts" :posts="posts"/> 
    -->
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
      console.log(this.projects)
      this.projects.forEach((project) => {
        project.tech.split(' ').forEach((tech) => {
          if (tech.trim() !== "") {
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
    console.time(fetchDocsLabel)
    const projects = await $content('projects')
      .without(['body', 'toc'])
      .sortBy('id', 'asc')
      .fetch()
    console.timeEnd(fetchDocsLabel)
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
