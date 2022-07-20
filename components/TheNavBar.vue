<template>
<nav class="backdrop-filter backdrop-blur sticky top-0 z-40 w-full">
  <div id="liner" class="max-w-7xl border-l border-r border-dashed mx-auto px-2 sm:px-4 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <div class="flex items-center px-2 lg:px-0">
        <nuxt-link :to="localePath('/')" class="flex-shrink-0">
          <TheLogo class="text-3xl w-auto" />
        </nuxt-link>
        <div class="hidden md:visible lg:block lg:ml-6 text-sm">
          <div class="flex space-x-4">
            <nuxt-link id="nav-link" v-show="$config.projects.enabled" :to="localePath('/projects')" class="active px-3 py-2 font-bold">{{ $t('nav.projects')}}</nuxt-link>
            <nuxt-link id="nav-link" v-show="$config.uses.enabled" :to="localePath('/stats')" class="active px-3 py-2 font-bold">{{ $t('nav.uses')}}</nuxt-link>
            <nuxt-link id="nav-link" v-show="$config.blog.enabled" :to="localePath('/blog')" class="active px-3 py-2 font-bold">{{ $t('nav.blog')}}</nuxt-link>
            <nuxt-link id="nav-link" v-show="$config.resume.enabled" :to="localePath('/resume')" class="active px-3 py-2 font-bold">{{ $t('nav.resume')}}</nuxt-link>
            <!-- <a id="nav-link" v-show="$config.buyMeACoffee.enabled" :href="$config.buyMeACoffee.url" target="_blank" rel="noreferrer" class="active px-3 py-2 text-sm font-bold">{{ $t('nav.buyMeACoffee')}}</a> -->
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="mr-2 flex items-center md:hidden">
          <button @click="mobileMenuOpen = true" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true">
          <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          </button>
        </div>
      </div>
      <div id="liner" class="hidden md:flex flex-row space-x-2 items-center justify-center border-l border-t border-dashed md:border-0">
        <div v-if="$config.laguageSwitcher.enabled" class="w-5 pt-0.5 m-1">
          <nuxt-link v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)" class="text-gray-300 hover:text-white" >
            <img v-if="locale.name == 'English'" src="/images/es.svg" class="rounded-sm opacity-90 hover:opacity-100 transition duration-300">
            <img v-else src="/images/gb.svg" class="rounded-sm opacity-90 hover:opacity-100 transition duration-300 opa">
          </nuxt-link>
        </div>
        <!-- sign in
          <div v-if="$config.firebase.enabled">
          <div id="nav-link" v-if="!user" @click="signInUser" class="active cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">{{ $t('nav.signIn')}}</div>
          <div id="nav-link" v-else @click="signOutUser" class="active cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-bold">{{ $t('nav.signOut')}}</div>
        </div> 
        -->
        <!-- Dark / Light Mode Button -->
              <button
                id="theme-toggle"
                name="theme-toggle"
                type="button"
                class="dark:hover:text-gray-300 hover:text-yellow-400 dark:text-white text-yellow-300 focus:outline-none rounded-lg text-sm p-2.5 transition duration-300 transform block"
              >
                <svg 
                  id="theme-toggle-dark-icon"
                  class="w-5 h-5 hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  
                >
                  <path
                    d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                  ></path>
                </svg>
                <svg 
                  id="theme-toggle-light-icon"
                  class="w-5 h-5 hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
        <!-- End of Dark/Light mode Button -->
      </div>
    </div>
  </div>
  <!-- mobile menu -->
  <transition
    enter-active-class="duration-150 ease-out"
    enter-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="duration-100 ease-in"
    leave-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div
      v-show="mobileMenuOpen"
      class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div class="rounded-lg ">
        <div class="bg-gray-200 dark:bg-gray-900 rounded-lg overflow-hidden" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
          <div class="px-5 pt-4 flex items-center justify-between">
            <div @click="mobileMenuOpen = false">
              <nuxt-link exact :to="localePath('/')">
                <TheLogo class="text-3xl w-auto"  />
              </nuxt-link>
            </div>
              <div class="-mr-2">
              <button @click="mobileMenuOpen = false" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" aria-label="Close menu">
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div @click="mobileMenuOpen = false" class="flex flex-col space-y-1 px-2 pt-2 pb-3">
            <!-- <nuxt-link exact :to="localePath('/')" class="flex px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:text-gray-100 dark:text-gray-200 focus:bg-gray-500 transition duration-150 ease-in-out" role="menuitem">{{ $t('nav.home')}}</nuxt-link> -->
            <nuxt-link v-show="$config.blog.enabled" :to="localePath('/blog')" class="flex px-3 py-2 rounded-md text-base font-medium focus:outline-none text-gray-900 dark:text-gray-200 focus:text-gray-100 focus:bg-gray-500 transition duration-150 ease-in-out" role="menuitem">{{ $t('nav.blog')}}</nuxt-link>
            <nuxt-link v-show="$config.projects.enabled" :to="localePath('/projects')" class="flex px-3 py-2 rounded-md text-base font-medium focus:outline-none text-gray-900 dark:text-gray-200 focus:text-gray-100 focus:bg-gray-500 transition duration-150 ease-in-out" role="menuitem">{{ $t('nav.projects')}}</nuxt-link>
            <nuxt-link v-show="$config.uses.enabled" :to="localePath('/stats')" class="flex px-3 py-2 rounded-md text-base font-medium focus:outline-none text-gray-900 dark:text-gray-200 focus:text-gray-100 focus:bg-gray-500 transition duration-150 ease-in-out" role="menuitem">{{ $t('nav.uses')}}</nuxt-link>
            <nuxt-link v-show="$config.resume.enabled" :to="localePath('/resume')" class="flex px-3 py-2 rounded-md text-base font-medium focus:outline-none text-gray-900 dark:text-gray-200 focus:text-gray-100 focus:bg-gray-500 transition duration-150 ease-in-out" role="menuitem">{{ $t('nav.resume')}}</nuxt-link>
            <!-- <a v-show="$config.buyMeACoffee.enabled" :href="$config.buyMeACoffee.url" target="_blank" rel="noreferrer" class="flex px-3 py-2 rounded-md text-base font-medium focus:outline-none dark:text-gray-200 focus:text-gray-100 focus:bg-gray-500 transition duration-150 ease-in-out" role="menuitem">{{ $t('nav.buyMeACoffee')}}</a> -->
            
            
            <div class="flex space-x-2 items-center justify-center">
              <!-- language switcher -->
              <div v-if="$config.laguageSwitcher.enabled" class="w-5 pt-0.5 m-1">
                <nuxt-link v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)" class="text-gray-300 hover:text-white" >
                  <img v-if="locale.name == 'English'" src="/images/es.svg" class="rounded-sm opacity-90 hover:opacity-100 transition duration-300">
                  <img v-else src="/images/gb.svg" class="rounded-sm opacity-90 hover:opacity-100 transition duration-300 opa">
                </nuxt-link>
              </div>

              <!-- Dark / Light Mode Button -->
              <button
                id="theme-toggle-mobile"
                name="theme-toggle"
                type="button"
                class="dark:hover:text-gray-300 hover:text-yellow-400 dark:text-white text-yellow-300 focus:outline-none rounded-lg text-sm p-2.5 transition duration-300 transform block"
              >
                <svg 
                  id="theme-toggle-dark-icon-mobile"
                  class="w-5 h-5 hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  
                >
                  <path
                    d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                  ></path>
                </svg>
                <svg 
                  id="theme-toggle-light-icon-mobile"
                  class="w-5 h-5 hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
        <!-- End of Dark/Light mode Button -->
      </div>
          </div>
          
          <!-- sign in
            <div v-if="$config.firebase.enabled">
              <div v-if="!user" @click="signInUser" class="block w-full px-5 py-3 text-center font-medium text-gray-200 bg-indigo-700 hover:bg-indigo-600 hover:text-gray-200 focus:outline-none focus:bg-indigo-600 focus:text-gray-100 transition duration-150 ease-in-out">{{ $t('nav.signIn') }}</div>
              <div v-else @click="signOutUser" class="block w-full px-5 py-3 text-center font-medium text-gray-200 bg-indigo-700 hover:bg-indigo-600 hover:text-gray-200 focus:outline-none focus:bg-indigo-600 focus:text-gray-100 transition duration-150 ease-in-out">{{ $t('nav.signOut') }}</div>
          </div> 
          -->
        </div>
      </div>
    </div>
  </transition>
</nav>
</template>

<script>
import TheLogo from "~/components/logos/TheLogo";
import ColorSwitch from "./ColorSwitch";

export default {
  components: {TheLogo, ColorSwitch},
  computed: {
    user() {
      return this.$store.state.user
    },
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  data() {
    return {
      mobileMenuOpen: false,
      toastOptions: { duration: 3000, theme: 'bubble' }
    }
  },
  mounted(){
    // Toogle Theme Functions
    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
    var themeToggleDarkIconMobile = document.getElementById('theme-toggle-dark-icon-mobile');
    var themeToggleLightIconMobile = document.getElementById("theme-toggle-light-icon-mobile");
    var themeToggleBtn = document.getElementById('theme-toggle');
    var themeToggleBtnMobile = document.getElementById('theme-toggle-mobile');
    var theme = document.documentElement;

    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        theme.classList.add('dark');
        themeToggleDarkIcon.classList.remove('hidden');
        themeToggleDarkIconMobile.classList.remove('hidden');
    } else {
        theme.classList.remove('dark');
        themeToggleLightIcon.classList.remove('hidden');
        themeToggleLightIconMobile.classList.remove('hidden');
    }

        // Add Event Listener to toggle button. 
    themeToggleBtn.addEventListener('click', function() {

      // toggle icons inside button
      themeToggleDarkIcon.classList.toggle('hidden');
      themeToggleLightIcon.classList.toggle('hidden');


      // if set via local storage previously
      if (localStorage.getItem('color-theme')) {
          if (localStorage.getItem('color-theme') === 'light') {
              theme.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          } else {
              theme.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          }

      // if NOT set via local storage previously
      } else {
          if (theme.classList.contains('dark')) {
              theme.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          } else {
              theme.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          }
        }
      });

        // Add Event Listener to toggle button. 
    themeToggleBtnMobile.addEventListener('click', function() {

      // toggle icons inside button
      themeToggleDarkIconMobile.classList.toggle('hidden');
      themeToggleLightIconMobile.classList.toggle('hidden');


      // if set via local storage previously
      if (localStorage.getItem('color-theme')) {
          if (localStorage.getItem('color-theme') === 'light') {
              theme.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          } else {
              theme.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          }

      // if NOT set via local storage previously
      } else {
          if (theme.classList.contains('dark')) {
              theme.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          } else {
              theme.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          }
        }
      });
      
  },
  methods: {
    async signInUser() {
      this.mobileMenuOpen = false
      try {
        const user = await this.$store.dispatch('signInUserWithGoogle')
        this.$toast.success(`welcome ${user.displayName.toLowerCase()} 🙌`, this.toastOptions)
      } catch (e) {
        console.error(e)
        this.$toast.error(e.toString(), this.toastOptions)
      }
    },
    signOutUser() {
      this.mobileMenuOpen = false
      this.$store.dispatch('signOut')
      this.$toast.show('see you next time 👋', this.toastOptions)
    }
  },
}
</script>

<style scoped>
.backdrop-filter {
  backdrop-filter: blur(15px);
}

.nuxt-link-active.active {
  @apply 
  text-gray-700
  dark:text-white
}

.nuxt-link-active.active-mobile {
  @apply bg-gray-200 text-white;
}

</style>
