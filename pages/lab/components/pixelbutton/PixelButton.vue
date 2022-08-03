<template>
<!--   <button 
    @click="goTo" 
    class="text-white bg-gradient-to-t from-blue-first to-blue-light p-2 rounded-sm border-2  border-gray-100 font-playmegames shadow-inner-2xl">
      Go {{ link }} 
    </button> -->

  <button @click="goTo" class="relative px-6 py-2 group mr-5 items-center justify-center font-playmegames tracking-wider">
      <span class="absolute inset-0 w-full h-full transition transform translate-x-1.5 translate-y-1.5 bg-blue-medium group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span id="btn-pixel" class="absolute inset-0 w-full h-full bg-blue-first border-2 border-gray-200 group-hover:bg-blue-medium"></span>
      <div class="flex">
        <span class="relative text-white group-hover:text-white self-center ">
          {{ name }}
        </span>
        <img :src="img" class="w-7 h-7 z-0 ml-4" alt="">
      </div>
  </button>
     
</template>

<script>

export default {
  props:{
    name: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: false
    },
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