<template>
    <div>
      <DevBoard :user="$config.social.codestats"/>
      <Equipement/>
      <Activity/>
  </div>
</template>

<script>

import DevBoard from '~/components/stats/DevBoard.vue';
import Equipement from '../../components/stats/Equipement.vue';
import Activity from '~/components/stats/Activity.vue';

export default {
    components: { DevBoard, Equipement, Activity }
}

</script>

<style>

</style>