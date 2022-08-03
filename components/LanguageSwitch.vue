<template>
    <div v-if="$config.laguageSwitcher.enabled" class="w-5 self-center m-3">
        <nuxt-link v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)" class="text-gray-300 hover:text-white" >
            <img v-if="locale.name == 'English'" src="images/es.svg" class="opacity-90 hover:opacity-100 transition duration-300">
            <img v-else src="images/gb.svg" class="opacity-90 hover:opacity-100 transition duration-300">
        </nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'LanguageSwitch',
    computed: {
        availableLocales () {
            return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
        }
  },
}
</script>

<style>

</style>