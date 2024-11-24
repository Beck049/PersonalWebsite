<script setup>
import DownloadCV from '../components/DownloadCV.vue'
import SocialMediaLink from '../components/SocialMediaLink.vue'
</script>
<template>
  <div class="profile-page">
    <!-- Top Section -->
    <div class="profile-div">
      <div class="profile-header">
        <div class="profile-picture">
          <img src="#" alt="Profile Picture" />
        </div>
        <h1 class="profile-name">Beck Xiao</h1>
        <div class="social-icons">
          <i> <SocialMediaLink fileName="Github.png" url="https://github.com" /> </i>
          <i> <SocialMediaLink fileName="Linkedin.png" url="https://linkedin.com" /> </i>
          <i> <SocialMediaLink fileName="Youtube.png" url="https://youtube.com" /> </i>
        </div>
        <br>
        <div class="download-cv-wrapper">
          <DownloadCV />
        </div>
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="profile-content">
      <!-- About Me -->
      <div class="section about-me">
        <h2>About Me</h2>
        <!-- Add content if needed -->
      </div>

      <!-- Experiences -->
      <div class="section experiences">
        <h2>Experiences</h2>
        <div class="experience-card" v-for="(exp, index) in experiences" :key="index">
          <p>{{ exp }}</p>
        </div>
      </div>

      <!-- Skills -->
      <div class="section skills">
        <h2>Skills</h2>
        <!-- Add skills dynamically -->
      </div>

      <!-- Certificates -->
      <div class="section certificates">
        <h2>Certificates</h2>
        <div class="certificate-row" v-for="(cert, index) in certificates" :key="index">
          <p>{{ cert.title }}</p>
          <p>{{ cert.department }}</p>
          <button @click="openCertificate(cert.link)">Open</button>
        </div>
      </div>

      <!-- Others -->
      <div class="section others">
        <h2>Others</h2>
        <!-- Add content dynamically -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experiences: ["NTNU CSIE 2019-2024", "NTNU CSIE 2019-2024", "NTNU CSIE 2019-2024"],
      certificates: [
        { title: "Certificate 1", department: "Dept 1", link: "#" },
        { title: "Certificate 2", department: "Dept 2", link: "#" },
      ],
    };
  },
  methods: {
    openCertificate(link) {
      window.open(link, "_blank");
    },
  },
};
</script>

<style scoped>
/* Base Layout */
.profile-page {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}

.profile-div {
  flex: 1 1 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
@media (min-width: 980px) {
  .profile-div {
    max-width: 360px;
  }
}

.profile-header {
  position: relative; /* Acts as a reference point for absolute positioning */
  background: #2c2c2c;
  height: 480px;
  width: 320px;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.profile-picture img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #ccc;
}

.profile-name {
  margin: 10px 0;
  color: #fff;
}

.download-cv-wrapper {
  position: absolute;
  bottom: 20px; /* Distance from the bottom edge */
  right: 20px; /* Distance from the right edge */
}

.social-icons{
  display: flex;
  gap: 20px;
}

.social-icons i {
  display: flex; /* 使用 flex 布局 */
  font-size: 1.5rem;
  color: #67e8f9;
  cursor: pointer;
}

/* Content Section */
.profile-content {
  flex: 2 1 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.section {
  background: #444;
  padding: 15px;
  border-radius: 8px;
}

.section h2 {
  color: #00bcd4;
  margin-bottom: 10px;
}

.experience-card,
.certificate-row {
  background: #555;
  padding: 10px;
  border-radius: 5px;
  margin: 5px 0;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}


</style>
