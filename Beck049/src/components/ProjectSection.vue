<script setup lang="ts">
import { PropType } from 'vue'
import Tag from '../components/Tag.vue'

</script>
<template>
  <div class="project-section">
    <div class="project-head">
      <div class="project-period">{{period}}</div>
      <div class="project-title">{{title}}</div>
      <div class="project-content">{{content}}</div>
      <div class="tag-group">
        <Tag :name="tags" v-for="(tags, index2) in tags" :key="index2" />
      </div>
    </div>
    
    <div class="project-frame" :style="{ backgroundImage: `url(${image})` }"></div>
  </div>
</template>


<script lang="ts">
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      period: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      tags: {
        type: Array as PropType<string[]>,
      }
    },
  };
</script>

<style scoped>
.project-section {
  width:100%;
  padding: 50px 150px;
  display: flex;
  flex-direction: row;
  align-content: center;

  justify-content: space-between;
  position: relative;
}
.project-head {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width:60%;
  min-height: 300px;
  margin-right: -80px;

  position: relative;
  z-index: 2;
  bottom: 5px;
}
.project-content {
  background: radial-gradient(farthest-corner, var(--primary), #2C2C2C99);
  padding: 1rem;
  border-radius: 0.5rem;

  font-weight: bold;
}
.project-title {
  font-size: 2rem;
  color: var(--secondary);
  font-weight: 800;
}

.project-frame {
  width:500px;
  height:300px;
  border-radius: 30px;

  background: contain no-repeat center center;
  background-size: cover;
  background: #DCDCDC;

  position: absolute;
  right: 150px;
  z-index: 1;
}
.tag-group {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  padding: 10px;
}
</style>
