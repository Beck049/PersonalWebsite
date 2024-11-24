<script setup lang="ts">
import ProjectList from '../components/ProjectList.vue'
</script>
<template>
  <div class="project-list">
    <h1>Project List</h1>
    <ProjectList />
  </div>
</template>

<style scoped>
.project-list {
  padding: 3rem;
}
h1 {
  font-size: 60px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
}
</style>