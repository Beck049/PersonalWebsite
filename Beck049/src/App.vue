<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Foot from './components/Footer.vue'
</script>

<template>
  <NavBar />
  <div class="router_view">
    <RouterView />
    <Foot/>
  </div>
</template>

<style scoped>
.router_view {
  width: 100vw;
}
</style>