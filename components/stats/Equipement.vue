<template>

<div id="liner" class="max-w-7xl mx-auto border-l border-r sm:p-10 p-5 font-playmegames">
    <div data-aos="zoom-in" id="liner" class=" justify-center lg:col-span-6">

        <div class="max-w-5xl sm:mx-auto shadow-md overflow-hidden text-lg">

        <h2 class="px-2 py-1 text-md text-gray-300">EQUIPEMENT</h2>
        
            <div class="border-t-2 border-gray-600">
            <dl>
                <div v-for="(item, index) in $config.devboard.meta" :class="index%2 === 0 ? 'bg-gray-100 dark:bg-gray-900' : 'bg-gray-200 dark:bg-gray-800'" class="px-3 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="font-medium text-gray-500">
                    {{ item.title }}
                </dt>
                <dd class="mt-1 text-gray-400 sm:mt-0 sm:col-span-2">
                    {{ item.value }}
                </dd>
                </div>
            </dl>
            </div>
        </div>

    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>