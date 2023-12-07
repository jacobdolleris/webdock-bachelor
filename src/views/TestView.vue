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
        {{ key }}: {{ value }}
      </p>
    </div>
  </template>
  


  
<style scoped>
*{
    color: black;
}
</style>