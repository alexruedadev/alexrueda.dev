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
        <ul class="tech-menu hidden text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">

                <a v-for="(item, index, count) in $config.fullstack" :id="index" :class="count == 0 ? 'w-full inline-block p-4 bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white  dark:hover:bg-gray-700 rounded-l-lg active-tech' : 'w-full inline-block p-4 bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'" aria-current="page">{{ index }}</a>

<!--             <li class="w-full">
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
            </li> -->
        </ul>

      </div>
      <!-- Stack navigator -->
      <div data-aos="zoom-in" id="div-2.3" class="w-full bg-gray-900 rounded-lg my-10 flex">

      <div id="info" class="w-full">
        <!-- logos scroll -->
        <div class="mb-4 border-b border-gray-200 dark:border-gray-700 text-center w-full">
            <ul data-aos="zoom-in" class="subtech-menu inline-flex -mb-px text-sm font-medium" data-tabs-toggle="#myTabContent" role="tablist">
                <li v-for="(item, index, count) in $config.fullstack[tech]" :id="index" class="mr-2" role="presentation">
                    <button :class="count == 0 ? 'active-subtech' : 'inline-block p-4 border-b-2 dark:hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700'">
                      <img :src="item.img" class="h-12 w-12 mx-5" alt="">
                      <p>{{index}}</p>
                    </button>
                </li>
            </ul>
        </div>
        <!-- logos content -->
        <div id="myTabContent" class="mx-10 my-5">
            <div class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  {{ $config.fullstack[tech][subtech].desc }}
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
    data() {
        return {
            tech: "languages",
            subtech: "html",
        };
    },
    // mounted() se carga despues de renderizar el DOM
    mounted() {
        const tech_menu = document.getElementsByClassName("tech-menu");
        const subtech_menu = document.getElementsByClassName("subtech-menu");
        let i = 0;
          tech_menu[0].childNodes.forEach(element => {
            element.addEventListener("click", () => {

                element.classList.add('active-tech');

                console.log(tech_menu[0].childNodes.length);
                console.log(i)

                if (tech_menu[0].childNodes.length) element.classList.add('rounded-r-lg')

                switch(element.id){
                    case "languages":
                        this.tech = "languages";
                        this.subtech = "html";
                        break;
                    case "frameworks":
                        this.tech = "frameworks";
                        this.subtech = "vue";
                        break;
                    case "databases":
                        this.tech = "databases";
                        this.subtech = "mysql";
                        break;
                    case "design":
                        this.tech = "design";
                        this.subtech = "photoshop";
                        break;
                    case "os":
                        this.tech = "os";
                        this.subtech = "windows";
                        break;
                }
                i++;
            });
        });
/* 
        languages.addEventListener("click", () => {
            languages.classList.add("active-tech");
            frameworks.classList.remove("active-tech");
            databases.classList.remove("active-tech");
            design.classList.remove("active-tech");
            os.classList.remove("active-tech");
            this.tech = "languages";
            this.subtech = "html";
        });
        frameworks.addEventListener("click", () => {
            frameworks.classList.add("active-tech");
            languages.classList.remove("active-tech");
            databases.classList.remove("active-tech");
            design.classList.remove("active-tech");
            os.classList.remove("active-tech");
            this.tech = "frameworks";
            this.subtech = "vue";
        });
        databases.addEventListener("click", () => {
            databases.classList.add("active-tech");
            languages.classList.remove("active-tech");
            frameworks.classList.remove("active-tech");
            design.classList.remove("active-tech");
            os.classList.remove("active-tech");
            this.tech = "databases";
            this.subtech = "mysql";
        });
        design.addEventListener("click", () => {
            design.classList.add("active-tech");
            languages.classList.remove("active-tech");
            databases.classList.remove("active-tech");
            frameworks.classList.remove("active-tech");
            os.classList.remove("active-tech");
            this.tech = "design";
            this.subtech = "photoshop";
        });
        os.addEventListener("click", () => {
            os.classList.add("active-tech");
            languages.classList.remove("active-tech");
            databases.classList.remove("active-tech");
            frameworks.classList.remove("active-tech");
            design.classList.remove("active-tech");
            this.tech = "os";
            this.subtech = "windows";
        }); */
        subtech_menu[0].childNodes.forEach(element => {
            element.addEventListener("click", () => {
                // element.classList.add('active-subtech');
                this.subtech = element.id;
                console.log(this.tech, this.subtech);
            });
        });
    },
}
</script>

<style>

.active-tech {
  @apply dark:bg-gray-700 dark:text-white;
}
.active-subtech {
  @apply inline-block p-4 dark:border-b-2 dark:border-gray-300 dark:text-gray-300
}

</style>