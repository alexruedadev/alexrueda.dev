<template>
  <div id="liner" class="max-w-7xl mx-auto border-l border-dashed border-r p-8">
    <div id="div-2" class="max-w-7xl mx-auto">
      <div id="div-2.1" class="text-center">
        <h2 id="section-title" >My Stack</h2>
      </div>
      <div id="div-2.2" class="mt-10">
        <!-- Subtitle ?? -->
        
        <!-- tech menu mobile -->
        <div class="sm:hidden">
            <label for="tabs" class="sr-only">Select your country</label>
            <select id="tabs" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Profile</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
            </select>
        </div>
        <!-- tech menu desktop -->
        <ul id="tech-menu" class="hidden text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
            <li class="w-full">
                <a id="languages" class="inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-l-lg active-tech" aria-current="page">Languages</a>
            </li>
            <li class="w-full">
                <a id="frameworks" class="inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Frameworks</a>
            </li>
            <li class="w-full">
                <a id="databases" class="inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Databases</a>
            </li>
            <li class="w-full">
                <a id="design" class="inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Design</a>
            </li>
            <li class="w-full">
                <a id="os" class="inline-block p-4 w-full bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">OS</a>
            </li>
        </ul>

      </div>
      <!-- Stack navigator -->
      <div data-aos="zoom-in" id="div-2.3" class="w-full bg-gray-900 rounded-lg my-10 flex">

      <div id="info" class="w-full">
        <!-- logos scroll -->
        <div class="mb-4 border-b border-gray-200 dark:border-gray-700 text-center w-full">
            <ul data-aos="zoom-in" class="inline-flex -mb-px text-sm font-medium" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                <li v-for="item in $config.fullstack[tech]" class="mr-2" role="presentation">
                    <button class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">
                      <img :src="item.img" class="h-12 w-12 mx-5" alt="">
                    </button>
                </li>
            </ul>
        </div>
        <!-- logos content -->
        <div id="myTabContent" class="mx-10 my-5">
            <div class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
            </div>
            <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
            </div>
            <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
            </div>
            <div class="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling.</p>
            </div>
        </div>

        <div class="">
          <div class="flex items-center m-3">
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          </div>
        </div>

        <!-- <div id="logos" class="p-10 text-center">
          <div v-for="item in $config.fullstack.languages" class="inline-flex">
            <img :src="item.img" class="h-14 w-14 mx-5" alt="">
          </div>
        </div> -->
      </div>
      
      </div>
    </div>
  </div>

</template>

<script>

export default {
  data(){
    return {
      tech: 'languages',
      active_tech: 'languages'
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
    })

     frameworks.addEventListener('click', ()=> {
      frameworks.classList.add('active-tech');
      languages.classList.remove('active-tech');
      databases.classList.remove('active-tech');
      design.classList.remove('active-tech');
      os.classList.remove('active-tech');
      this.tech = 'frameworks';
      console.log(tech)
    })

    databases.addEventListener('click', ()=> {
      databases.classList.add('active-tech');
      languages.classList.remove('active-tech');
      frameworks.classList.remove('active-tech');
      design.classList.remove('active-tech');
      os.classList.remove('active-tech');
      this.tech = 'databases';
    })

    design.addEventListener('click', ()=> {
      design.classList.add('active-tech');
      languages.classList.remove('active-tech');
      databases.classList.remove('active-tech');
      frameworks.classList.remove('active-tech');
      os.classList.remove('active-tech');
      this.tech = 'design';
    })

    os.addEventListener('click', ()=> {
      os.classList.add('active-tech');
      languages.classList.remove('active-tech');
      databases.classList.remove('active-tech');
      frameworks.classList.remove('active-tech');
      design.classList.remove('active-tech');
      this.tech = 'os';
    })
  },
}
</script>

<style>

.active-tech {
  @apply dark:bg-gray-700 dark:text-white transition ease-in-out duration-200;
}

</style>