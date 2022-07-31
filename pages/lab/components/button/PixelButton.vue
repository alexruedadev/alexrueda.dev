<template>
  <button 
    @click="goTo" 
    class="text-white 
    bg-gradient-to-t from-blue-first to-blue-light 
    p-2 
    rounded-sm border-2 
     border-gray-100 
     font-playmegames 
     shadow-inner-2xl
     
     "
    >
      Go {{ link }} 
    </button>
</template>

<script>

export default {
  props:{
    link: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    goTo() {
      this.$router.push('/' + this.link)
    }
  }
}

</script>

<style>

</style>