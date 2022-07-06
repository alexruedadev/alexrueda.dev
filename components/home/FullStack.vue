<template>
  <section id="liner" class="max-w-7xl mx-auto border-l border-dashed border-r p-8">
    <aside>
      <!-- tech tab -->
      <ul class="tech-tab">
        <li :id="name" v-for="(item, name) in $config.fullstack" class="tech-tab-btn">
          <a href="">{{ name }}</a>
        </li>
      </ul>
      <!-- tools tab -->
      <ul class="tools-tab">
        <li v-for="(item, name) in $config.fullstack[tech]" class="tools-tab-btn">
        <button :id="name">
          <img :src="item.img" alt="" class="tool-icon">
        </button>
        </li>
      </ul>
      <!-- description -->
      <div class="desc-box">
        <p class="text-gray-600">
          {{ $config.fullstack[tech][tool].desc }}
        </p>
      </div>
    </aside>
</section>
</template>

<script>

import fullStack from '../../lang/docs/full_stack_ES.js'

export default {
  data() {
    return {
      // Code
      tech: 'languages',
      tool: 'html'
    }
  },
  mounted() {
    /* tech tabs */
    const tech_tab = document.querySelector('.tech-tab');
    const tabs = tech_tab.querySelectorAll(".tech-tab li");

    /* tools tabs */
    const tools_tab = document.querySelector('.tools-tab');
    const t_tabs = tools_tab.querySelectorAll(".tools-tab-btn button");

    tabs.forEach(element => {
      element.addEventListener("click", (e) => {
        e.preventDefault();

        this.tech = element.id;
        this.tool = Object.keys(fullStack[element.id])[0];

      });
    });

    t_tabs.forEach(element => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        
        this.tool = element.id;
        console.log(this.tool)
      });
    });
  }
}

</script>

<style>

.tech-tab {
  @apply w-full font-medium text-center;
}

.tech-tab-btn {
  @apply inline-block dark:text-gray-300 mx-5
}

.tools-tab {
  @apply w-full font-medium text-center;
}

.tools-tab-btn {
  @apply inline-block mx-5
}

.tool-icon {
  @apply h-10 w-10 mx-5
}

.desc-box {
  @apply p-10 rounded-lg bg-gray-900;
}

</style>