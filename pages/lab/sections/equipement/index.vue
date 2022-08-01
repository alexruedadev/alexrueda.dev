<template>
<div id="full-screen">
    <Equipement :equipement="equipement" />
</div>
    
</template>

<script>
import Equipement from './Equipement.vue'

export default {
    components: {
    Equipement,
},
    data(){
        return {
            equipement: this.$config.devboard.meta
        }
    }
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
    transform: translate(-100%, -50%);
}
</style>