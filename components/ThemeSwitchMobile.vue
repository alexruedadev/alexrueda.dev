<template>
  <div>
    <button
      id="theme-toggle-mobile"
      name="theme-toggle"
      type="button"
      class="dark:hover:text-gray-300 hover:text-yellow-400 dark:text-white text-yellow-300 focus:outline-none rounded-lg text-sm m-3 transition duration-300 transform block"
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
  </div>
</template>

<script>

export default {

  name: 'ThemeSwitchMobile',

  mounted(){
    // Toogle Theme Functions
    var themeToggleDarkIconMobile = document.getElementById('theme-toggle-dark-icon-mobile');
    var themeToggleLightIconMobile = document.getElementById("theme-toggle-light-icon-mobile");
    var themeToggleBtnMobile = document.getElementById('theme-toggle-mobile');
    var theme = document.documentElement;

    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        theme.classList.add('dark');
        themeToggleDarkIconMobile.classList.remove('hidden');

    } else {
        theme.classList.remove('dark');
        themeToggleLightIconMobile.classList.remove('hidden');

    }

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
}

</script>

<style>

</style>