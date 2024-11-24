<script setup lang="ts">
import ServiceList from '../components/ServiceList.vue'
</script>
<template>
  <div class="service-list">
    <h1>Service List</h1>
    <ServiceList />
  </div>
</template>

<style scoped>
.service-list {
  padding: 3rem;
}
h1 {
  font-size: 60px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
}
</style>