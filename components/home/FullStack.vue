<template>
  <div id="liner" class="max-w-7xl mx-auto border-l border-dashed border-r p-8 font-vt">
    <div id="div-2" class="max-w-7xl mx-auto">
      <div id="div-2.1" class="text-center">
        <h2 id="section-title" >My Stack</h2>
      </div>
      <div id="div-2.2" class="mt-10">
        <!-- Subtitle ?? -->
        
        <!-- tech menu desktop -->
        <ul id="tech-menu" class="cursor-pointer hidden text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
            <li class="w-full">
                <a id="languages" class="inline-block p-4 w-full bg-gray-100 hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-l-lg active-tech" aria-current="page">Languages</a>
            </li>
            <li class="w-full">
                <a id="frameworks" class="inline-block p-4 w-full bg-gray-100 hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Frameworks</a>
            </li>
            <li class="w-full">
                <a id="databases" class="inline-block p-4 w-full bg-gray-100 hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Databases</a>
            </li>
            <li class="w-full">
                <a id="design" class="inline-block p-4 w-full bg-gray-100 hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Design</a>
            </li>
            <li class="w-full">
                <a id="os" class="inline-block p-4 w-full bg-gray-100 rounded-r-lg hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">OS</a>
            </li>
        </ul>

      </div>
      <!-- tools navigation -->
      <div data-aos="zoom-in" id="tools-nav">
        <!-- tools -->
        <div id="tools">
            <ul id="tool-logos">
                <li v-for="(item, index, n) in $config.fullstack[tech]" class="mr-2">
                    <button id="tool-btn" :class="n == 0 ? 'active-tool' : 'inactive'" type="button">
                      <img :src="item.img" class="h-10 w-10 mx-5" alt="">
                      <!-- <p class="font-vt text-gray-300 pt-3">{{index}}</p> -->
                    </button>
                </li>
            </ul>
        </div>
        <!-- tools description -->
        <div id="myTabContent" class="mx-10 my-5">
            <div class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ $config.fullstack[tech][tool].desc }}</p>
            </div>
        </div>
      </div>
      <!-- tool navigation end -->

    </div>
  </div>

</template>

<script>

export default {
  data(){
    return {
      tech: 'languages',
      tool: 'html'
    }
  },
  // mounted() se carga despues de renderizar el DOM
  mounted(){
    const tech_menu = document.getElementById('tech-menu');

    const languages = document.getElementById('languages');
    const frameworks = document.getElementById('frameworks');
    const databases = document.getElementById('databases');
    const design = document.getElementById('design');
    const os = document.getElementById('os');

    languages.addEventListener('click', ()=> {
      languages.classList.add('active-tech');
      frameworks.classList.remove('active-tech');
      databases.classList.remove('active-tech');
      design.classList.remove('active-tech');
      os.classList.remove('active-tech');
      this.tech = 'languages';
      this.tool = 'html';
    })

     frameworks.addEventListener('click', ()=> {
      frameworks.classList.add('active-tech');
      languages.classList.remove('active-tech');
      databases.classList.remove('active-tech');
      design.classList.remove('active-tech');
      os.classList.remove('active-tech');
      this.tech = 'frameworks';
      this.tool = 'vue';
    })

    databases.addEventListener('click', ()=> {
      databases.classList.add('active-tech');
      languages.classList.remove('active-tech');
      frameworks.classList.remove('active-tech');
      design.classList.remove('active-tech');
      os.classList.remove('active-tech');
      this.tech = 'databases';
      this.tool = 'mysql';
    })

    design.addEventListener('click', ()=> {
      design.classList.add('active-tech');
      languages.classList.remove('active-tech');
      databases.classList.remove('active-tech');
      frameworks.classList.remove('active-tech');
      os.classList.remove('active-tech');
      this.tech = 'design';
      this.tool = 'photoshop';
    })

    os.addEventListener('click', ()=> {
      os.classList.add('active-tech');
      languages.classList.remove('active-tech');
      databases.classList.remove('active-tech');
      frameworks.classList.remove('active-tech');
      design.classList.remove('active-tech');
      this.tech = 'os';
      this.tool = 'windows';
    })
  },
}
</script>

<style>

#tools-nav {
  @apply w-full bg-gray-900 rounded-lg my-10 p-3
}

#tools {
  @apply mb-4 border-b border-gray-200 dark:border-gray-700 text-center w-full overflow-scroll sm:overflow-hidden;
}

#tool-logos {
  @apply inline-flex -mb-px text-sm font-medium;
}

#tool-btn {
  @apply inline-block p-4 dark:border-b-2 border-transparent dark:hover:border-gray-300 border-gray-100 dark:border-gray-700
}

.active-tech {
  @apply dark:bg-gray-700 dark:text-white transition ease-in-out duration-200;
}

.active-tool {
  @apply bg-transparent
}

</style>