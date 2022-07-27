<template>
    <div id="liner" class="max-w-7xl mx-auto border-l border-r sm:p-10 p-5 font-playmegames flex">
        <h2 class="sm:text-5xl text-4xl mx-auto">
            {{title}}
        </h2>
    </div>
</template>

<script>

export default {
    props: {
        title: {
            type:String
        }
    },
}
</script>

<style>

</style>