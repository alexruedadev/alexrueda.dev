<template>
    <div id="liner" class="max-w-7xl mx-auto p-3 font-playmegames flex bg-gray-900 border-l border-r border-gray-600">
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