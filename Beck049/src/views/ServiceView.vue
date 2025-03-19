<script setup lang="ts">
import ServiceList from '../components/ServiceList.vue'
</script>
<template>
  <div class="service">
    <h1>Service List</h1>
    <ServiceList />
  </div>
</template>

<style scoped>
.service {
  padding: 3rem;
  background: var(--bg-color-1);
}
h1 {
  font-size: 60px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
}
@media (max-width: 450px) {
  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    text-align: center;
  }
}
</style>