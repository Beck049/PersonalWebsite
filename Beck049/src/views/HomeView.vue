<script setup lang="ts">
import DownloadCV from '../components/DownloadCV.vue'
import SocialMediaLink from '../components/SocialMediaLink.vue'
</script>
<template>
  <div class="portfolio-container">
    <!-- Left Block -->
    <div class="left-block">
      <h1>Hi, I'm Beck Xiao</h1>
      <h2>Frontend Developer</h2>
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
</template>

<style scoped>
.portfolio-container {
  display: flex;
  height: 100vh;
  width: 100%;
}

.left-block, .right-block {
  padding: 2rem;
  flex: 1;
  align-content: center;
}

.left-block {
  background-color: #2b2b2b;
  color: #f5f5f5;
}

.right-block {
  background-color: #444;
}

@media (max-width: 1200px) {
  .portfolio-container {
    flex-direction: column; /* Stack elements vertically */
  }

  .left-block, .right-block {
    flex: none; /* Prevent stretching */
    width: 100%; /* Make each block take full width */
    height: 100%;
  }
}

h1 {
  font-size: 4rem;
  color: #d9d9d9;
  font-weight: 600;
}

h2 {
  font-size: 2rem;
  color: #67e8f9;
  font-weight: 600;
}

p {
  font-size: 1rem;
  margin: 1rem 0;
  width: 35rem;
}

.buttons {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.download-cv {
  background-color: #67e8f9;
  color: #2b2b2b;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  margin-right: 1rem;
}

.social-icons{
  display: flex;
  gap: 10px;
}

.social-icons i {
  font-size: 1.5rem;
  color: #67e8f9;
  margin-right: 1rem;
  cursor: pointer;
}
</style>
