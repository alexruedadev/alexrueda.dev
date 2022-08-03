<template>

  <nav id="nav-menu" class="backdrop-filter backdrop-blur sticky top-0 z-40 font-playmegames text-md tracking-wider text-gray-100">

    <!-- desktop menu -->
    <div id="section" class="max-w-5xl mx-auto px-5 sm:px-10 lg:px-0">
      <div class="flex items-center justify-between h-16">

        <!-- logo and links -->
        <div class="flex">
          <nuxt-link :to="localePath('/')">
            <TheLogo/>
          </nuxt-link>
          <div class="hidden md:visible lg:block self-center lg:ml-10">
            <div class="flex space-x-10">
              <nuxt-link id="nav-link" v-show="$config.devboard.enabled" :to="localePath('/devboard')" class="active hover:text-blue-light">{{ $t('nav.devboard')}}</nuxt-link>
              <nuxt-link id="nav-link" v-show="$config.projects.enabled" :to="localePath('/projects')" class="active">{{ $t('nav.projects')}}</nuxt-link>
              <nuxt-link id="nav-link" v-show="$config.blog.enabled" :to="localePath('/blog')" class="active">{{ $t('nav.blog')}}</nuxt-link>
              <nuxt-link id="nav-link" v-show="$config.resume.enabled" :to="localePath('/resume')" class="active">{{ $t('nav.resume')}}</nuxt-link>
              <a id="nav-link" v-show="$config.buyMeACoffee.enabled" :href="$config.buyMeACoffee.url" target="_blank" rel="noreferrer" class="active">{{ $t('nav.buyMeACoffee')}}</a>
            </div>
          </div>
        </div>

        <!-- hamburger -->
        <div class="flex lg:hidden">
          <button id="main-menu" @click="mobileMenuOpen = true" type="button" class="text-gray-300 focus:outline-none" aria-label="Open menu" aria-haspopup="true">
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <!-- switchers -->
        <div class="hidden lg:flex">
          <LanguageSwitch/>
          <ThemeSwitch />
        </div>

      </div>
    </div>

  <!-- mobile menu -->
    <transition enter-active-class="duration-150 ease-out" enter-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <div v-show="mobileMenuOpen" class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden">
        <div class="p-4 bg-gray-200 dark:bg-gray-900 rounded-md overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">

          <!-- logo and close button -->
          <div class="flex items-center justify-between">
            <div @click="mobileMenuOpen = false">
              <nuxt-link exact :to="localePath('/')">
                <TheLogo/>
              </nuxt-link>
            </div>
            <button @click="mobileMenuOpen = false" type="button" class="text-gray-300 focus:outline-none" aria-label="Close menu">
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- nav links -->
          <div @click="mobileMenuOpen = false" class="flex flex-col">
            <nuxt-link v-show="$config.blog.enabled" :to="localePath('/blog')" class="py-3 focus:outline-none text-gray-900 dark:text-gray-200 focus:text-gray-100" role="menuitem">{{ $t('nav.blog')}}</nuxt-link>
            <nuxt-link v-show="$config.projects.enabled" :to="localePath('/projects')" class="py-3 focus:outline-none text-gray-900 dark:text-gray-200 focus:text-gray-100" role="menuitem">{{ $t('nav.projects')}}</nuxt-link>
            <nuxt-link v-show="$config.devboard.enabled" :to="localePath('/devboard')" class="py-3 focus:outline-none text-gray-900 dark:text-gray-200 focus:text-gray-100" role="menuitem">{{ $t('nav.devboard')}}</nuxt-link>
            <nuxt-link v-show="$config.resume.enabled" :to="localePath('/resume')" class="py-3 focus:outline-none text-gray-900 dark:text-gray-200 focus:text-gray-100" role="menuitem">{{ $t('nav.resume')}}</nuxt-link>
            <a v-show="$config.buyMeACoffee.enabled" :href="$config.buyMeACoffee.url" target="_blank" rel="noreferrer" class="py-3 focus:outline-none dark:text-gray-200 focus:text-gray-100" role="menuitem">{{ $t('nav.buyMeACoffee')}}</a>
            
            <!-- switchers -->
            <div class="flex items-center justify-center">
              <LanguageSwitch/>
              <ThemeSwitchMobile/>
            </div>

          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
import TheLogo from "~/components/logos/TheLogo";
import ThemeSwitch from "~/components/ThemeSwitch";
import ThemeSwitchMobile from "~/components/ThemeSwitchMobile";
import LanguageSwitch from "~/components/LanguageSwitch";

export default {
  components: {TheLogo, ThemeSwitch, ThemeSwitchMobile, LanguageSwitch},
  data() {
    return {
      mobileMenuOpen: false,
    }
  },
}
</script>

<style scoped>

.backdrop-filter {
  backdrop-filter: blur(15px);
}

</style>
