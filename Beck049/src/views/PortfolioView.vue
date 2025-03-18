<script setup lang="ts">
import Tag from '../components/Tag.vue'
import NameCard from '../components/NameCard.vue'
</script>
<template>
  <div class="profile-page">
    <!-- Top Section -->
    <div class="floating-card" :style="shouldFloat ? { marginTop: positionY + 'px' } : {}"><NameCard /></div>

    <!-- Bottom Section -->
    <div class="profile-content">
      <!-- About Me -->
      <div class="section">
        <h2><p class="hash"># </p>About_Me</h2>
        <div class="border-style about enableENDL">{{ about }}</div>
      </div>

      <!-- Educations -->
      <div class="section">
        <h2><p class="hash"># </p>Educations</h2>
        <div class="education" v-for="(edu, index) in educations" :key="index">
          <div class="border-style image-center"><img :src="edu.img" width=60></div>
          <div class="border-style education-content">
            <i>{{ edu.name }}</i>
            <i>{{ edu.title }}</i>
            <i>{{ edu.period }}</i>
          </div>
        </div>
      </div>

      <!-- Skills -->
      <div class="section">
        <h2><p class="hash"># </p>Skills</h2>
        <div class="skill-group">
          <div class="skill" v-for="(skill, index) in skills" :key="index">
            <div class="border-style">{{ skill.title }}</div>
            <div class="border-style">
              <p v-for="(ele, index) in skill.elements" :key="index">{{ele}}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Experiences -->
      <div class="section">
        <h2><p class="hash"># </p>Experiences</h2>
        <div class="experience" v-for="(exp, index) in experiences" :key="index">
          <div class="experience-head">
            <div class="border-style image-center"><img :src="exp.img" width=60></div>
            <div class="border-style experience-content">
              <div class="experience-title">
                <i>{{ exp.title }}</i>
                <i>{{ exp.name }}</i>
              </div>
              <div>{{ exp.period }}</div>
            </div>
          </div>
          <div class="border-style">
            <p class="enableENDL">{{ exp.content }}</p>
            <div class="tag-group">
              <Tag :name="tags" v-for="(tags, index2) in exp.tags" :key="index2" />
          </div>
          </div>
        </div>
      </div>

      <!-- Projects -->
      <div class="section">
        <h2><p class="hash"># </p>Projects</h2>
        <div class="project" v-for="(proj, index) in projects" :key="index">
          <div class="border-style project-content">
            <div class="project-title">
              <i>{{ proj.title }}</i>
            </div>
            <div>{{ proj.period }}</div>
          </div>
          <div class="border-style">
            <p class="enableENDL">{{ proj.content }}</p>
            <div class="tag-group">
              <Tag :name="tags" v-for="(tags, index2) in proj.tags" :key="index2" />
          </div>
          </div>
        </div>
      </div>

      <!-- Certificates -->
      <div class="section">
        <h2><p class="hash"># </p>Certificates</h2>
        <div class="certificate-group">
          <div class="certificate" v-for="(cert, index) in certificates" :key="index">
            <div class="border-style"><a :href="cert.link">{{ cert.title }}</a></div>
            <div><img :src="cert.img"></div>
          </div>
        </div>
      </div>

      <!-- Activities -->
      <div class="section">
        <h2><p class="hash"># </p>Activities</h2>
        <div class="other" v-for="(other, index) in others" :key="index">
          <div class="border-style project-content">
            <div class="other-title">
              <i>{{ other.title }}</i>
            </div>
          </div>
          <div class="border-style">
            <p class="enableENDL">{{ other.content }}</p>
            <div class="tag-group">
              <Tag :name="tags" v-for="(tags, index2) in other.tags" :key="index2" />
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { ref, computed } from "vue";

const windowWidth = ref(window.innerWidth);
// need computed to update the value `shouldFloat` every time window change 
const shouldFloat = computed(() => windowWidth.value >= 1000);

window.addEventListener("resize", () => {
  windowWidth.value = window.innerWidth;
});


export default {
  data() {
    return {
      lastPosition: 0,
      isHidden: false,
      positionY: 0,
      about: "我是一名對資訊技術充滿熱情的學生，專注於程式設計及各種技術領域的探索。\n\n從大學開始，我逐漸找到對程式的興趣，並在不同領域的專案中磨練自己的技能。無論是醫療影像分析、Web開發、遊戲設計，還是資安領域，我都深入研究並實作相關技術。特別是在「師大資工線上申請系統」專案中，我擔任專案經理，負責規劃與管理專案進度，並協助團隊進行前後端開發。\n\n我具備果斷的決策力、強大的意志力以及良好的團隊合作精神，並喜歡追根究底地解決問題。這些特質讓我在挑戰中不斷成長，並能夠在壓力下有效應對各種挑戰，保持高效的工作表現。",
      educations: [
        {
          img: "./src/components/icons/NTNU.png", name:"National Taiwan Normal University", title:"Bachleor's degree, Computer Science", period:"2019/09 ~ 2024/06"
        },
      ],
      experiences: [
        {
          img:"./src/components/icons/GSS.png", name:"Galaxy Software Services Corporation", title:"Assistant Software Engineer", period:"2023/01 ~ 2023/07",
          content:"- Gained expertise in integrating various company applications to optimize workflows and enhance functionality.\n- Strengthened knowledge in React.js, MySQL, and .NET framework, with effective problem-solving techniques.\n- Improved skills in gathering technical and business requirements and translating them into actionable development plans.",
          tags: [".Net Framework", "React.js", "MySQL"],
        },
      ],
      skills: [
        { title: "Language", elements: ["C/C++ Python", "javascript Go"], },
        { title: "Frontend", elements: ["vue.js", "React.js"], },
        { title: "Backend", elements: ["node.js", "GraphQL"], },
        { title: "Database", elements: ["MySQL", "MongoDB", "PostgreSQL"], },
      ],
      projects: [
        {
          title:"XZ-util report", period:"2024/05~2024/06",
          content:"- Developing reverse engineering skills, specifically in tracking function calls, analyzing control flow graphs (CFG), and comparing different versions of binary code to uncover vulnerabilities.\n- Deepened the understanding of how malware hides and triggers within systems, as well as how to identify backdoors and malicious code in software applications.",
          tags: ["Cybersecurity", "Ghidra"],
        },
        {
          title:"NTNU_ADMS", period:"2022/09 ~ 2023/01",
          content:"- Honed my ability to organize development workflows, monitor progress, and guide the team towards successful project completion.\n- Developed skills in both frontend and backend, which gives me a deeper understanding of full-stack development.\n- By working with MongoDB, I gained valuable experience with NoSQL databases, enhancing ability to work with non-relational data storage and understanding the flexibility they offer.",
          tags: ["vue.ts", "Go", "MongoDB"],
        },
        {
          title:"Brain Tumor MRI", period:"2022/07~2023/06",
          content:"- Developed expertise in using CNNs for analyzing medical images, specifically for detecting and segmenting brain tumors in MRI scans.\n- gained experience in instance segmentation, allowing you to accurately label specific regions in medical images.\n- You honed your skills in applying machine learning techniques to healthcare problems, leveraging frameworks like PyTorch and MONAI.",
          tags: ["Pytorch", "CNN", "Machine Learning"],
        },
        {
          title:"PokemonRL", period:"2023/09~2023/12",
          content:"- Deepened the understanding of reinforcement learning by implementing Deep Q-Learning (DQN) and training an agent to optimize its actions in a complex environment like Pokémon Red.",
          tags: ["Pyboy", "Stable Baselines 3", "Reinforce Learning"],
        },
      ],
      certificates: [
        { title: "Google Project Manager", link: "https://www.coursera.org/account/accomplishments/specialization/S7Q54PP7S5PR", img: "./src/components/icons/GooglePM.jpeg" },
        { title: "Google Cybersecurity", link: "https://www.coursera.org/account/accomplishments/specialization/J6QVZFU025GT", img: "./src/components/icons/GoogleCyber.jpeg" },
        { title: "Google UX Design", link: "https://www.coursera.org/account/accomplishments/specialization/ZSMQ4DER7QFS", img: "./src/components/icons/GoogleUX.jpeg" },
      ],
      others: [
        {
          title:"Google Foobar 2023",
          content:"- honed my ability to break down complex problems and design effective solutions within a limited time frame.\n- Improving the problem-solving skills and the ability to think critically under pressure.",
          tags: ["Python"],
        },
        {
          title:"Normal Game Jam 2024",
          content:"- Gained hands-on experience in using Godot to develop a 2D dungeon puzzle game, improving skills in game engine usage.\n- The tight development timeline taught me how to manage time effectively.",
          tags: ["Godot"],
        },
        {
          title:"SEEDLab",
          content:"- Through hands-on exercises like Buffer Overflow, SQL Injection, and ARP Spoofing, you gained practical experience in identifying and understanding common vulnerabilities and attack techniques.",
          tags: ["Cybersecurity"],
        },
        {
          title:"XV6",
          content:"- Deepened the understanding of critical OS mechanisms, such as system calls, process management, memory management, and file systems, by implementing them within the xv6 kernel.\n- Gained hands-on experience modifying and expanding the xv6 kernel.",
          tags: ["Operating System"],
        },
      ],
    };
  },
  methods: {
    handleScrolldown() {
      const currentScrollPosition = window.scrollY;
      this.isHidden = currentScrollPosition > this.lastPosition && currentScrollPosition > 50;
      this.positionY = this.isHidden? currentScrollPosition -70: currentScrollPosition;
      this.lastPosition = currentScrollPosition;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScrolldown);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScrolldown);
  }
};
</script>

<style scoped>
/* Base Layout */
.profile-page {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  background: var(--bg-color-1);
}

.floating-card {
  position: sticky;
  flex-direction: column;
  transition: top 0.3s ease-out;
}

/* Content Section */
.profile-content {
  flex: 2 1 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid var(--gray-text);
  border-radius: 20px;
  padding: 28px 32px;
}

@media (max-width: 1000px) {
  .profile-page {
    flex-direction: column;
    align-items: center;
  }

  .floating-card {
    position: static; /* Remove sticky positioning */
    width: fit-content; /* Make it fit its content */
    margin: 0 auto; /* Center it horizontally */
  }

  .profile-content {
    width: 100%;
  }
}

.section {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.section h2 {
  color: var(--gray-text);
  margin-bottom: 5px;
}
.section h2 .hash{
  color: var(--tertiary);
  display: inline;
}

.border-style {
  border: 1px solid var(--gray-text);
}
.image-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.enableENDL {
  white-space: pre-line;
  padding: 0px 10px;
}
.tag-group {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  padding: 10px;
}

/* Content Display */
.about {
  padding: 12px;
}
  /* Education */
.education {
  display: flex;
  flex-direction: row;
}
.education-content {
  display: flex;
  flex-direction: column;
  color: var(--gray-text);
  font-size: 0.8rem;
  padding: 0px 10px;
}
.education-content i {
  display: inline;
  margin-top: -5px;
}
.education-content i:first-child {
  font-size: 1.2rem;
}
  /* Experience */
.experience {
  width:100%;
}
.experience-head {
  display: flex;
  flex-direction: row;
  max-height: fit-content;
}
.experience-content {
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
}
.experience-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--gray-text);
  font-size: 0.8rem;
}
.experience-title i:first-child{
  font-size: 1.2rem;
}
  /* Skill */
.skill-group {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
.skill {
  box-sizing: border-box;
  text-align: center;
  padding: 5px;
}
.skill div:first-child {
  color: var(--gray-text);
  font-weight: bold;
}
.skill div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding:5px;
}
  /* Project */
.project {
  width:100%;
}
.project-content {
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
}
.project-title {
  color: var(--gray-text);
  font-size: 1.2rem;
}
/* Certificate */
.certificate-group {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
.certificate {
  width: calc(33.333% - 15px); /* 每行最多 3 個*/
  box-sizing: border-box;
  text-align: center;
}
.certificate div a {
  text-decoration: underline;
  font-weight: 800;
  color: var(--accent-1);
}
.certificate div img {
  max-height: 200px;
  width: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
/* Other */
.other {
  width:100%;
}
.other-title {
  color: var(--gray-text);
  font-size: 1.2rem;
}
</style>
