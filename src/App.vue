<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="top-menu-replacement ignore"><h2>Staging area</h2>
      <router-link to="/" style="margin-right: 30px;">Go to Home</router-link>
      <router-link to="about">Go to About</router-link>
    </div>
    
  </header>
<router-view />
</template>


<style lang="scss">
  @import '../src/assets/main.scss';
</style>
