<script setup lang="ts">
import Tag from '../components/Tag.vue'
import NameCard from '../components/NameCard.vue'
</script>
<template>
  <div class="profile-page">
    <!-- Top Section -->
    <div class="floating-card" :style="{marginTop: positionY + 'px'}"><NameCard /></div>

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

      <!-- Others -->
      <div class="section">
        <h2><p class="hash"># </p>Others</h2>
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
export default {
  data() {
    return {
      lastPosition: 0,
      isHidden: false,
      positionY: 0,
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus dui id lorem placerat aliquam. Quisque eget suscipit orci, varius ornare velit. Nulla facilisi. Suspendisse euismod sagittis hendrerit. Ut nibh tellus, elementum non sollicitudin vitae, suscipit non quam. Mauris vehicula mollis tellus in commodo. Pellentesque tempus tempus viverra.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus dui id lorem placerat aliquam. Quisque eget suscipit orci.",
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
          title:"NTNU_ADMS", period:"2022/09 ~ 2023/01",
          content:"在系上的「軟體工程」中實作「國立臺灣師範大學資工系 線上申請系統 」，針對系上各種報名管道進行數位化，包含線上申請、線上評分、排名以及資料分析。\n在專案中擔任 Project Manager 的角色，主要工作為排定及監督開發流程，同時也負責前端與後端的組內教學與支援開發。",
          tags: ["vue.ts", "Go", "MongoDB"],
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
          content:"I accedently got the challenge at 2023/3/8 after lunch break.\nAnd I was working on Medical Segmentation Machine Learning using python for the pass few months. though I was working on an intern job using React.ts & C# & abp framework",
          tags: ["Python"],
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
      console.log(this.positionY, this.isHidden);
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
