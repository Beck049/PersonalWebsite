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
              <p class="skill-list" v-for="(ele, index) in skill.elements" :key="index">{{ele}}</p>
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
            <div class="border-style experience-data">
              <div class="experience-title">
                <i>{{ exp.title }}</i>
                <i>{{ exp.name }}</i>
              </div>
              <div>{{ exp.period }}</div>
            </div>
          </div>
          <div class="border-style">
            <p class="enableENDL experience-content">{{ exp.content }}</p>
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
          <div class="border-style project-head">
            <div class="project-title">
              <i><a :href="proj.link" target="_blank" rel="noopener noreferrer">{{ proj.title }}</a></i>
            </div>
            <div>{{ proj.period }}</div>
          </div>
          <div class="border-style">
            <p class="enableENDL project-content">{{ proj.content }}</p>
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
            <div class="border-style"><a :href="cert.link" target="_blank" rel="noopener noreferrer">{{ cert.title }}</a></div>
            <div><img :src="cert.img"></div>
          </div>
        </div>
      </div>

      <!-- Activities -->
      <div class="section">
        <h2><p class="hash"># </p>Activities</h2>
        <div class="other" v-for="(other, index) in others" :key="index">
          <div class="border-style project-head">
            <div class="other-title">
              <i><a :href="other.link" target="_blank" rel="noopener noreferrer">{{ other.title }}</a></i>
            </div>
          </div>
          <div class="border-style">
            <p class="enableENDL project-content">{{ other.content }}</p>
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
          img: "/icons/NTNU.png", name:"National Taiwan Normal University", title:"Bachleor's degree, Computer Science", period:"2019/09 ~ 2024/06"
        },
      ],
      experiences: [
        {
          img:"/icons/GSS.png", name:"Galaxy Software Services Corporation", title:"Assistant Software Engineer", period:"2023/01 ~ 2023/07",
          content:"- 開發跨服務整合平台：設計並實作自動流程圖介面，整合公司 SaaS 服務以及 Google 相關功能，提升自動化流程效率 40%，降低客戶手動設定時間。\n- 串接 SHOPLINE API：負責 API 串接，讓公司服務無縫連接外部電商平台，成功擴展 5+ 家合作企業，提高企業應用靈活度。\n- 提升系統效能與維護性：使用 React.js、MySQL、.NET framework 進行開發與優化",
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
          content:"- 靜態分析惡意後門：使用 Ghidra 逆向分析 liblzma5.so，透過函式交叉引用與控制流程圖 (CFG)追蹤可疑邏輯，成功識別內部修改點，還原其影響 OpenSSH 認證的行為模式。",
          tags: ["Cybersecurity", "Ghidra"],
          link: "https://hackmd.io/@Beck049/BkeQuqv4R",
        },
        {
          title:"NTNU_ADMS", period:"2022/09 ~ 2023/01",
          content:"- 專案管理與流程優化：帶領 20+ 人開發團隊，規劃開發流程與監督進度，確保專案在時程內完成，成功將研究所申請系統100% 電子化，減少紙本作業時間與人力成本。\n- 全端開發與技術學習：負責前後端開發，使用 TypeScript + Vue.js 建構元件化前端、Go + MongoDB 優化後端效能，並提升自身對 NoSQL 資料庫的理解與應用能力。\n- 團隊培訓與技術支援：除了開發與管理，還協助內部教學與技術指導，提高團隊開發效率 25%，促進組員快速適應新技術與架構，確保專案順利進行。",
          tags: ["vue.ts", "Go", "MongoDB"],
          link: "https://hackmd.io/@Beck049/ByGbUWj2yl",
        },
        {
          title:"Brain Tumor MRI", period:"2022/07~2023/06",
          content:"- 腦瘤 MRI 影像分析與分割：使用 CNN 與 instance segmentation 技術，自動辨識並標註腦瘤位置，模型達成 腫瘤檢測準確率 92%，顯著提升 MRI 影像診斷的自動化程度。\n- 深度學習框架應用：運用 MONAI 的 UNETR 進行影像標註，結合 PyTorch 訓練 CNN 模型，有效提升特徵提取能力。",
          tags: ["Pytorch", "CNN", "Machine Learning"],
          link: "https://hackmd.io/@Beck049/rJyWcWs2kg",
        },
        {
          title:"師大暑期資工營", period:"2021/11~2022/07",
          content:"- 統籌與專案管理：擔任總籌，負責規劃 100 人規模 的資工營隊，制定時程並監督各組進度，確保所有講座、實作課程與活動順利執行，活動滿意度達 90%。\n- 跨組協調與廠商洽談：與多個廠商接洽，確保場地、設備、物資準時到位，同時支援各組運作，讓團隊能專注於內容規劃與互動。\n- 提升高中生對資工的認識：透過精心設計的課程與活動，使參與學生對大學資工系的了解度提高 85%（根據活動後問卷統計），成功激發學生對資訊科學的興趣。",
          tags: ["Leadership", "Teamwork"],
          link: "https://hackmd.io/@Beck049/rJcIq-jn1g",
        },
        {
          title:"PokemonRL", period:"2023/09~2023/12",
          content:"- Deepened the understanding of reinforcement learning by implementing Deep Q-Learning (DQN) and training an agent to optimize its actions in a complex environment like Pokémon Red.",
          tags: ["Pyboy", "Stable Baselines 3", "Reinforce Learning"],
          link: "https://hackmd.io/@Beck049/SJ4jt-j2yg",
        },
      ],
      certificates: [
        { title: "Google Project Manager", link: "https://www.coursera.org/account/accomplishments/specialization/S7Q54PP7S5PR", img: "/icons/GooglePM.jpeg" },
        { title: "Google Cybersecurity", link: "https://www.coursera.org/account/accomplishments/specialization/J6QVZFU025GT", img: "/icons/GoogleCyber.jpeg" },
        { title: "Google UX Design", link: "https://www.coursera.org/account/accomplishments/specialization/ZSMQ4DER7QFS", img: "/icons/GoogleUX.jpeg" },
      ],
      others: [
        {
          title:"Google Foobar 2023",
          content:"- honed my ability to break down complex problems and design effective solutions within a limited time frame.\n- Improving the problem-solving skills and the ability to think critically under pressure.",
          tags: ["Python"],
          link: "https://hackmd.io/@Beck049/r1ji9Wjn1e",
        },
        {
          title:"Normal Game Jam 2024",
          content:"- Gained hands-on experience in using Godot to develop a 2D dungeon puzzle game, improving skills in game engine usage.\n- The tight development timeline taught me how to manage time effectively.",
          tags: ["Godot"],
          link: "https://hackmd.io/@Beck049/SkRbpirwA",
        },
        {
          title:"SEEDLab",
          content:"- Through hands-on exercises like Buffer Overflow, SQL Injection, and ARP Spoofing, you gained practical experience in identifying and understanding common vulnerabilities and attack techniques.",
          tags: ["Cybersecurity"],
          link: "https://hackmd.io/@Beck049/B12vKZi3ke",
        },
        {
          title:"XV6",
          content:"- Deepened the understanding of critical OS mechanisms, such as system calls, process management, memory management, and file systems, by implementing them within the xv6 kernel.\n- Gained hands-on experience modifying and expanding the xv6 kernel.",
          tags: ["Operating System"],
          link: "https://hackmd.io/@Beck049/HyssOKkZR",
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
    padding: 20px 0px;
  }

  .floating-card {
    position: static; /* Remove sticky positioning */
    width: fit-content; /* Make it fit its content */
    margin: 0 auto; /* Center it horizontally */
  }

  .profile-content {
    width: 100%;
    padding: 28px 32px;
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
  color: var(--content-color);
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
.experience-data {
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
.experience-content{
  color: var(--content-color);
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
.skill-list{
  color: var(--content-color);
}
  /* Project */
.project {
  width:100%;
}
.project-head {
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
}
.project-content{
  color: var(--content-color);
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
