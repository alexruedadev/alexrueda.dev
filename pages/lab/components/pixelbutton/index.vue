<template>
    <div id="full-screen">
        <PixelButton link="projects" class="center-component" />
    </div>
</template>

<script>
import PixelButton from './PixelButton.vue'

export default {
    components: { PixelButton }
}
</script>

<style>

#full-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
}

.center-component {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>