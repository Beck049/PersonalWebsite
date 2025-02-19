<script setup lang="ts">
import ProjectSection from '../components/ProjectSection.vue'
</script>
<template>
  <div class="project-list">
    <h1>Project List</h1>
    <div class="category">
      <div :class="[{chosen: index === current}]" v-for="(cat, index) in categories" :key="index" @click="current=index">{{cat}}</div>
    </div>
    <div v-for="(proj, index) in projects" :key="index" v-show="current===0 || proj.category===current" class="project">
      <ProjectSection :title="proj.title" :period="proj.period" :content="proj.content" :image="proj.image" :tags="proj.tags"/>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      current: 1,
      categories:["All", "Web", "Games", "Security", "Software", "Others"],
      projects: [
        { title:"NTNU_ADMS", period:"2022/09~2022/12",
          content:"在系上的「軟體工程」中實作「國立臺灣師範大學資工系 線上申請系統 」，針對系上各種報名管道進行數位化，包含線上申請、線上評分、排名以及資料分析。\n在專案中擔任 Project Manager 的角色，主要工作為排定及監督開發流程，同時也負責前端與後端的組內教學與支援開發。",
          image:"../src/components/icons/image.png",
          category: 1 /* Web */,
          tags: ["Vue.js", "Go", "MongoDB"],
        },
        { title:"師大暑期資工營", period:"2021/11~2022/07",
          content:"在系上的「軟體工程」中實作「國立臺灣師範大學資工系 線上申請系統 」，針對系上各種報名管道進行數位化，包含線上申請、線上評分、排名以及資料分析。\n在專案中擔任 Project Manager 的角色，主要工作為排定及監督開發流程，同時也負責前端與後端的組內教學與支援開發。",
          image:"../src/components/icons/image2.png",
          category: 5 /* Others */,
        },
      ],
    };
  },
}
</script>

<style scoped>

.project-list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 3rem;
  background: var(--bg-color-1);
}
h1 {
  font-size: 60px;
  font-weight: 800;
  text-align: center;
}
.category{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 10px;
  margin-bottom: 3rem;
}
.category div {
  border-radius: 25px;
  padding: 5px 25px;
  background: var(--accent-1);
  opacity: 0.3;
  font-weight: bolder;
  font-size: 1.2rem;
  color: var(--gray-text);
}
.category div:hover {
  transform: scale(1.1);
  transition: transform 0.2s ease-in-out;
  opacity: 0.6;
  cursor: pointer;
}
.chosen {
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);  
  opacity: 0.8 !important;
}
.project{
  width:100%;
}
</style>