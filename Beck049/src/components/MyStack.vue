<template>
  <div class="my-stack column">
    <div class="my-stack-head">
      <div class="person border" v-bind:ref="setRefs">
        <h3>Beck Xiao</h3>
        <p><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" 
            stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-accent" 
            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect>
            <polyline points="3,6 12,13 21,6"></polyline></svg>                
            beckxiao2001323@gmail.com</p>
        <p><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-accent" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        Taipei, Taiwan</p>
        <p><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-accent" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            1+ year working experience</p>
        <p><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" 
            stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-accent" 
            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M4.5 9h15"></path>
            <path d="M4.5 15h15"></path>
            <path d="M12 3a12 12 0 0 1 0 18"></path>
            <path d="M12 3a12 12 0 0 0 0 18"></path></svg>
        Chinese, English</p>                
      </div>
      <div class="column">
        <div class="row">
          <div class="exp-level border" v-bind:ref="setRefs"><p>professional level</p><h2>Junior</h2></div>
          <div class="exp-level border" v-bind:ref="setRefs"><p>project completed</p><h2>5+</h2></div>
        </div>
        <div class="services border" v-bind:ref="setRefs">
          <h4>Service</h4>
          <p><span class="text-accent"> → </span>Full Stack Development</p>
          <p><span class="text-accent"> → </span>Web Design & Development</p>
          <p><span class="text-accent"> → </span>Cybersecurity Related</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="tech-stack-list border" v-bind:ref="setRefs">
        <div class="tech-stack-box" :class="{ floatUp: index === floatId }"
            v-for="(stack, index) in technologies" :key="index">
            <img :src="stack.src" />
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import type { ComponentPublicInstance } from "vue";
// @ts-ignore
import { SeqAnimate } from "./utils/SeqAnimate.js"

// var for floating tech
const floatId = ref(0);
const technologies = [
  { name: "C", src: "../src/components/icons/C.png" },
  { name: "C#", src: "../src/components/icons/Csharp.png" },
  { name: "Python", src: "../src/components/icons/Python.png" },
  { name: "Javascript", src: "../src/components/icons/JS.png" },
  { name: "Typescript", src: "../src/components/icons/TS.png" },
  { name: "Go", src: "../src/components/icons/go.png" },
  { name: "git", src: "../src/components/icons/git.png" },
  { name: "vuejs", src: "../src/components/icons/vue.png" },
  { name: "reactjs", src: "../src/components/icons/react.png" },
  { name: "nodejs", src: "../src/components/icons/nodejs.png" },
  { name: "dotnet", src: "../src/components/icons/dotnet.png" },
  { name: "mongo", src: "../src/components/icons/mongo.png" },
  { name: "mysql", src: "../src/components/icons/mysql.png" },
  { name: "docker", src: "../src/components/icons/docker.png" },
  { name: "graphql", src: "../src/components/icons/graphql.png" },
  { name: "figma", src: "../src/components/icons/figma.png" },
  { name: "godot", src: "../src/components/icons/Godot.png" },
  { name: "kali", src: "../src/components/icons/kali.png" },
  { name: "ghidra", src: "../src/components/icons/ghidra.png" },
  { name: "wireshark", src: "../src/components/icons/wireshark.png" },
];

const setFloat = () => {
  setTimeout(() => {
    floatId.value = (floatId.value + 1) % technologies.length;
    setFloat();
  }, 2000);
};

// var for Sequential Animation
const divRefs = ref<HTMLElement[]>([]);
const { observeElements, stopObserving, handleVisibilityChange } = SeqAnimate(divRefs);

const setRefs = (el: Element | ComponentPublicInstance | null) => {
  if (el instanceof HTMLElement && !divRefs.value.includes(el)) {
    divRefs.value.push(el);
  }
};

onMounted(() => {
  observeElements();
  document.addEventListener("visibilitychange", handleVisibilityChange);
  setFloat();
});

onBeforeUnmount(() => {
  stopObserving();
  document.removeEventListener("visibilitychange", handleVisibilityChange);
});
</script>

<style scoped>
.my-stack {
  align-items: center;
  background-color: var(--bg-color-1);
  padding: 3rem 0px;
}
.my-stack-head {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
@media (min-width: 450px) {
  .my-stack-head {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
}
.my-stack div{
  max-width: 800px;
}
h2 {
  color: var(--primary);
  font-size: 3rem;
}
h3 {
  color: var(--primary);
  font-size: 4rem;
}
h4 {
  font-size: 2rem;
}
p {
  font-size: 1rem;
}
.row {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.border {
  border: var(--gray-text) solid 1px;
  border-radius: 15px;
  padding: 10px 25px;
  /* for animation */
  opacity: 0;
  transform: translateY(20px);
}
.person{
  flex: 1;
}
.services{
  flex: 1;
}
.person p {
  padding-top: 5px;
}
.person h3 {
  font-weight: bolder;
}
.exp-level h2{
  text-align: center;
  margin-top: -1rem;    
}
.exp-level {
  flex-grow: 1; /* .exp-level 平均填充 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.services {
  flex-grow: 1; /* 同 exp-level 一樣伸展 */
}
.tech-stack-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 30px;
  padding: 1rem;
  justify-content: center;
  align-items: center;
}
.tech-stack-box {
  width: 64px;
  height: 64px;
  border: 2px solid var(--gray-text);
  border-radius: 8px;
  box-shadow: 5px 5px 18px var(--primary);
  transition: transform 1s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
}
.floatUp {
  transform: translateY(-10px);
}
</style>
