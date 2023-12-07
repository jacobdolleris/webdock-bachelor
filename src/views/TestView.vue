<script>
import data from '../assets/data.json';

export default {
  data() {
    return {
      server: data,
    };
  },
};
</script>

<template>
    <div>
      <p v-for="(value, key) in server.components.disks.user_selectable_options" :key="key">
      Navn {{ value.model }} <br>
      Plads {{ value.capacity }} <br>
      Pris {{ value.price_dkk_cent }} kr
    </p>
    </div>
  </template>
  


  
<style scoped>
*{
    color: black;
}
</style>