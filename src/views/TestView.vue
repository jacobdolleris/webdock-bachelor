<script>
import data from '../assets/data.json';

export default {
  data() {
    return {
      server: data,
    };
  },
  methods: {
    formatData(options) {
      return JSON.stringify(options, null, 2)
        .replace(/["{}]/g, '') // Fjern dobbelte anførselstegn og krøllede parenteser
        .replace(/,/g, ', '); // Tilføj et mellemrum efter kommaer
    },
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