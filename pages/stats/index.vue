<template>
    <div>
      <!-- <Header title="Stats" /> -->
      <DevBoard/>
      <Equipement/>
  </div>
</template>

<script>

import Divider from '~/components/home/Divider.vue';
import DevBoard from '~/components/stats/DevBoard.vue';
import Equipement from '../../components/stats/Equipement.vue';
import Activity from '~/components/stats/Activity.vue';
import Header from '~/components/Header.vue';

export default {
    components: { Divider, DevBoard, Equipement, Activity, Header }
}

</script>

<style>

</style>