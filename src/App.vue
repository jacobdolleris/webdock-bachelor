<script>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="top-menu-replacement ignore"><h2>Staging area</h2>
      <router-link to="/" style="margin-right: 30px;">Go Home</router-link>
      <router-link to="about"  style="margin-right: 30px;">Go to About</router-link>
      <router-link to="test">Go to Testside</router-link>
    </div>
    
  </header>
<router-view />
</template>


