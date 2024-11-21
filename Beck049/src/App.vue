<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <NavBar />
  <div class="router_view">
    <RouterView />
  </div>
</template>

<style scoped>
.router_view {
  width: 100vw;
}
</style>