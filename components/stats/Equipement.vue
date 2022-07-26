<template>

<div id="liner" class="max-w-7xl mx-auto border-l border-r border-dashed p-10 font-pixel_boy">
    <div id="liner" class=" justify-center lg:col-span-6 py-10">

        <div class="max-w-5xl sm:mx-auto shadow-md overflow-hidden text-lg">

        <h2 class="px-2 py-1 font-pixel_boy text-xl text-gray-300">Equipement</h2>
        
            <div>
            <dl>
                <div v-for="(item, index) in $config.uses.meta" :class="index%2 === 0 ? 'bg-gray-100 dark:bg-gray-900' : 'bg-gray-200 dark:bg-gray-800'" class="px-3 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
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