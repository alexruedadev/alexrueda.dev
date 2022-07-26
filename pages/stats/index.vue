<template>
    <div>
    <h1 class="text-3xl md:text-2x1 lg:text-3x1 xl:text-2x1 font-pixel_boy text-center">
        Stats
    </h1>
    <div class="myDIV">Hover over me.</div>
    <div class="hide">I am shown when someone hovers over the div above.</div>

    <DevBoard/>
    <Equipement/>
  </div>
</template>

<script>

import Divider from '~/components/home/Divider.vue';
import DevBoard from '~/components/stats/DevBoard.vue';
import Equipement from '../../components/stats/Equipement.vue';
import Activity from '~/components/stats/Activity.vue';

export default {
    components: { Divider, DevBoard, Equipement, Activity }
}

</script>

<style>

.hide {
  display: none;
}

.myDIV:hover + .hide {
  display: block;
  color: red;
  z-index: 0;
  position: absolute;
}

</style>