<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>
<router-view />
</template>

<style scoped>
a{
  color:purple;
  font-size: 30px;
  margin-right:20px;
  
}
</style>
