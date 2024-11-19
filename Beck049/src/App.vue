<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <!-- <NavBar /> -->
  <ul class="nav-links">
    <li><RouterLink to="/">Home</RouterLink></li>
    <li><RouterLink to="/portfolio">Portfolio</RouterLink></li>
    <li><RouterLink to="/project">Projects</RouterLink></li>
    <li><RouterLink to="/service">Services</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
  </ul>
  <br>
  <RouterView />
</template>

<style scoped>
.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.nav-links li {
  display: inline;
}
</style>