<script setup lang="ts">
import { ref, onMounted } from "vue"
import DownloadCV from '../components/DownloadCV.vue'
import SocialMediaLink from '../components/SocialMediaLink.vue'
import WhatIDo from '../components/WhatIDo.vue'
import MyStack from '../components/MyStack.vue'

const titles = ["Frontend Developer", "Fullstack Developer"];
const displayText = ref("");
let i = 0, j = 0, isDeleting = false;

const typeEffect = () => {
  const curTitle = titles[i];
  if(isDeleting) {
    displayText.value = curTitle.substring(0, j--);
  } else {
    displayText.value = curTitle.substring(0, j++);
  }

  let speed = isDeleting? 100: 150;
  if(!isDeleting && j === curTitle.length+1){
    speed = 1000;
    isDeleting = true;
  } else if (isDeleting && j === 0){
    isDeleting = false;
    i = (i+1) % titles.length;
  }

  setTimeout(typeEffect, speed);
};

onMounted(() => {
  typeEffect();
});

</script>
<template>
  <div class="portfolio-container">
    <!-- Left Block -->
    <div class="left-block">
      <h1>Hi, I'm Beck Xiao</h1>
      <h2 id="titles">{{ displayText }}<span class="cursor">|</span></h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Diam ultricies felis libero parturient parturient ullamcorper 
        venenatis senectus. Facilisis quisque pellentesque, luctus orci 
        inceptos orci lacinia magnis.
      </p>
      <div class="buttons">
        <DownloadCV />
        <div class="social-icons">
          <i> <SocialMediaLink fileName="Github.png" url="https://github.com" /> </i>
          <i> <SocialMediaLink fileName="Linkedin.png" url="https://linkedin.com" /> </i>
          <i> <SocialMediaLink fileName="Youtube.png" url="https://youtube.com" /> </i>
        </div>
      </div>
    </div>

    <!-- Right Block -->
    <div class="right-block">
      <!-- Add content here if needed, or leave it as a styled empty block -->
    </div>
  </div>

  <WhatIDo/>

  <MyStack/>

</template>

<style scoped>
.portfolio-container {
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: var(--bg-color-1);
}

.left-block, .right-block {
  padding: 2rem;
  flex: 1;
  align-content: center;
}

.right-block {
  background-color: #444;
  opacity: 0.5;
}

@media (max-width: 980px) {
  .right-block {
    display: none; /* Stack elements vertically */
  }

  .left-block {
    flex: none; /* Prevent stretching */
    width: 100%; /* Make each block take full width */
    height: 100%;
  }
}

h1 {
  font-size: 4rem;
  color: var(--gray-text);
  font-weight: 800;
}

h2 {
  font-size: 2rem;
  color: var(--secondary);
  font-weight: 800;
}

.cursor {
  font-weight:bolder;
  animation: blink 0.7s infinite;
}
@keyframes blink {
  50% {opacity: 0; }
}

p {
  font-size: 1rem;
  margin: 1rem 0;
  width: 35rem;
}

.buttons {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 2rem 0rem;
}

.social-icons{
  display: flex;
  gap: 10px;
}

.social-icons i {
  font-size: 1.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
}


</style>
