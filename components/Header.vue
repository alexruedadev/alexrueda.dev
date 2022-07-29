<template>
    <div id="liner" class="max-w-5xl mx-auto p-3 font-playmegames flex border-b-2 border-gray-400">
        <h2 class="text-2xl mx-auto">
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